import { BALE_API_BASE, BALE_CHAT_IDS } from './bale-config.mjs';

const MESSAGE_LIMIT = 3500;
const compact = value => String(value || '').replace(/\s+/g, ' ').trim();

function labelText(label) {
  if (!label) return '';
  const copy = label.cloneNode(true);
  copy.querySelectorAll('.zfb-required,input,select,textarea').forEach(node => node.remove());
  return compact(copy.textContent);
}

function questionAnswer(question) {
  const choices = [...question.querySelectorAll('input[type="radio"],input[type="checkbox"]')];
  if (choices.length) {
    const answers=choices.filter(input => input.checked).map(input => labelText(input.closest('label')) || input.value);
    const date=question.querySelector('input[name="appointment_date"]')?.value;
    if(date)answers.unshift(date);
    return answers.join('، ');
  }
  const values = [];
  for (const field of question.querySelectorAll('input,textarea,select')) {
    if (field.disabled || (field.type === 'hidden' && field.name !== 'appointment_date')) continue;
    if (field.type === 'file') {
      for (const file of field.files || []) values.push(`${file.name} (${Math.ceil(file.size / 1024)} KB)`);
    } else if (field.tagName === 'SELECT') {
      values.push([...field.selectedOptions].filter(option => option.value).map(option => compact(option.textContent)).join('، '));
    } else if (field.value.trim()) values.push(field.value.trim());
  }
  return values.filter(Boolean).join('\n');
}

export function splitBaleText(text, limit = MESSAGE_LIMIT) {
  if (!Number.isInteger(limit) || limit < 2) throw new Error('Invalid message limit');
  const chunks = [];
  let remaining = String(text);
  while (remaining.length > limit) {
    let end = remaining.lastIndexOf('\n', limit - 1) + 1;
    if (end < limit / 2) end = limit;
    const code = remaining.charCodeAt(end - 1);
    if (code >= 0xD800 && code <= 0xDBFF) end--;
    chunks.push(remaining.slice(0, end));
    remaining = remaining.slice(end);
  }
  if (remaining) chunks.push(remaining);
  return chunks;
}

export function buildBaleSubmission(form, { formId, title, id = crypto.randomUUID(), now = new Date() }) {
  const lines = [
    `ضربان‌یار | ${compact(title)}`,
    `شناسه فرم: ${formId}`,
    `کد ارسال: ${id}`,
    `تاریخ: ${new Intl.DateTimeFormat('fa-IR', { timeZone: 'Asia/Tehran', dateStyle: 'short', timeStyle: 'short' }).format(now)}`,
    '',
  ];
  let questionNumber = 0;
  for (const stage of form.querySelectorAll('.zfb-stage')) {
    const heading = compact(stage.querySelector('.zfb-stage-header h3')?.textContent);
    if (heading) lines.push(heading, '');
    for (const question of stage.querySelectorAll('.zfb-question')) {
      const questionTitle = labelText(question.querySelector('.zfb-question-label'));
      if (!questionTitle) continue;
      lines.push(`${++questionNumber}. ${questionTitle}`, `پاسخ: ${questionAnswer(question) || 'پاسخی وارد نشده'}`, '');
    }
  }
  const chunks = splitBaleText(lines.join('\n'));
  const messages = chunks.map((chunk, index) => chunks.length > 1 ? `کد ارسال: ${id} | بخش ${index + 1} از ${chunks.length}\n\n${chunk}` : chunk);
  return { id, messages, delivery: new Map() };
}

// This is a simple cross-origin POST. Bale currently does not expose CORS headers;
// an opaque response confirms only that fetch completed, not API-level delivery.
export async function sendBaleSubmission(submission, {
  fetchImpl = globalThis.fetch,
  pause = ms => new Promise(resolve => setTimeout(resolve, ms)),
  timeoutMs = 25000,
} = {}) {
  const results = await Promise.allSettled(BALE_CHAT_IDS.map(async chatId => {
    const sent = submission.delivery.get(chatId) || new Set();
    submission.delivery.set(chatId, sent);
    for (let index = 0; index < submission.messages.length; index++) {
      if (sent.has(index)) continue;
      const body = new URLSearchParams({ chat_id: chatId, text: submission.messages[index] });
      const response = await fetchImpl(`${BALE_API_BASE}/sendMessage`, {
        method: 'POST',
        mode: 'no-cors',
        credentials: 'omit',
        referrerPolicy: 'no-referrer',
        body,
        signal: AbortSignal.timeout(timeoutMs),
      });
      // Useful if the service enables readable responses in a future deployment.
      // Never try to read an opaque response or retry it as though it failed.
      if (response.type !== 'opaque') {
        const data = await response.json();
        if (!response.ok || data.ok !== true) throw new Error('Bale rejected the request');
      }
      sent.add(index);
      if (index < submission.messages.length - 1) await pause(1100);
    }
  }));
  const failed = results.flatMap((result, index) => result.status === 'rejected' ? [BALE_CHAT_IDS[index]] : []);
  if (failed.length) {
    throw new Error(`ارسال درخواست به بله برای مقصد ${failed.join('، ')} کامل نشد. اتصال اینترنت را بررسی کنید و دوباره ارسال کنید. تأیید دریافت پیام از بله در دسترس مرورگر نیست.`);
  }
}
