const base = (import.meta.env.VITE_API_BASE_URL || '').replace(/\/$/, '');

export const hasApi = Boolean(base);

export async function api(path, options = {}) {
  if (!base) throw new Error('این بخش هنوز به سرویس آنلاین متصل نشده است. اطلاعاتی ارسال نشد.');
  const response = await fetch(`${base}${path}`, { credentials: 'include', ...options });
  const data = await response.json().catch(() => ({}));
  if (!response.ok) throw new Error(data.message || 'ارتباط با سرور برقرار نشد؛ دوباره تلاش کنید.');
  return data;
}

export function normalizeDigits(value) {
  return String(value).replace(/[۰-۹]/g, c => String('۰۱۲۳۴۵۶۷۸۹'.indexOf(c))).replace(/[٠-٩]/g, c => String('٠١٢٣٤٥٦٧٨٩'.indexOf(c)));
}

export function validationMessage(value, rule) {
  const clean = normalizeDigits(value).trim();
  if (!clean) return '';
  if (rule === 'phone' && !/^(?:\+98|0098|0)?9\d{9}$/.test(clean.replace(/[\s-]/g, ''))) return 'شماره موبایل معتبر وارد کنید؛ مانند ۰۹۱۲۳۴۵۶۷۸۹.';
  if (rule === 'numbers_only' && !/^\d+(?:\.\d+)?$/.test(clean)) return 'لطفاً فقط عدد وارد کنید.';
  if (rule === 'letters_only' && !/^[\p{L}\p{M}\s\u200c'-]+$/u.test(clean)) return 'لطفاً نام را فقط با حروف وارد کنید.';
  return '';
}
