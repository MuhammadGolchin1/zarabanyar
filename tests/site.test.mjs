import { test, before, after } from 'node:test';
import assert from 'node:assert/strict';
import { existsSync } from 'node:fs';
import { readFile } from 'node:fs/promises';
import { createServer } from 'vite';
import { chromium } from 'playwright';

let server,browser;
const origin='http://127.0.0.1:5174';
const routes=JSON.parse(await readFile(new URL('../src/routes.json',import.meta.url),'utf8'));
const route=name=>routes.find(route=>route.name===name).path;

before(async()=>{
  server=await createServer({server:{host:'127.0.0.1',port:5174,strictPort:true}});
  await server.listen();
  const executablePath=process.env.BROWSER_EXECUTABLE_PATH || [
    'C:/Program Files/Google/Chrome/Application/chrome.exe',
    'C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe',
    '/usr/bin/chromium','/usr/bin/google-chrome',
  ].find(existsSync);
  browser=await chromium.launch({headless:true,...(executablePath ? {executablePath} : {})});
});
after(async()=>{await browser?.close();await server?.close();});

async function open(name,viewport={width:1440,height:1000}) {
  const page=await browser.newPage({viewport});
  await page.route('https://tapi.bale.ai/**',request=>request.fulfill({status:200,contentType:'application/json',body:JSON.stringify({ok:true})}));
  await page.goto(origin+encodeURI(route(name)),{waitUntil:'networkidle'});
  await page.locator('header.elementor').waitFor();
  return page;
}

test('all public routes render in RTL with local assets and no runtime errors',async()=>{
  const page=await browser.newPage({viewport:{width:1440,height:1000}});
  const failures=[],external=[];
  page.on('pageerror',e=>failures.push(e.message));
  page.on('response',r=>{if(r.status()>=400)failures.push(`${r.status()} ${r.url()}`);});
  page.on('request',r=>{if(r.url().startsWith('https://'))external.push(r.url());});
  for(const entry of routes) {
    await page.goto(origin+encodeURI(entry.path),{waitUntil:'networkidle'});
    await page.locator('header.elementor').waitFor();
    assert.equal(await page.locator('html').getAttribute('dir'),'rtl');
    assert.equal(await page.locator('footer.elementor').count(),1);
    assert.equal(await page.evaluate(()=>document.documentElement.scrollWidth>innerWidth+1),false,entry.name);
  }
  assert.deepEqual(failures,[]);
  assert.deepEqual(external,[]);
  await page.close();
});

test('mobile menu supports navigation and browser back',async()=>{
  const page=await open('Home',{width:390,height:844});
  const toggle=page.locator('header .icon_dropdown_menu');
  await toggle.click();
  assert.equal(await toggle.getAttribute('aria-expanded'),'true');
  assert.equal(await page.locator('header .dropdown_menu').isVisible(),true);
  await page.locator('header .dropdown_menu a').first().click();
  await page.waitForURL('**/about-us/');
  await page.locator('[data-elementor-id="881"]').waitFor();
  await page.goBack();
  await page.locator('.react-slider').waitFor();
  assert.equal(new URL(page.url()).pathname,'/');
  assert.equal(await page.evaluate(()=>document.documentElement.scrollWidth>innerWidth+1),false);
  await page.close();
});

test('login and registration validate identity and report missing online service honestly',async()=>{
  const page=await open('Home');
  await page.locator('.digits-login-modal').click();
  await page.getByRole('dialog').waitFor();
  await page.locator('#login-identity').fill('123');
  await page.getByRole('button',{name:'ادامه دهید',exact:true}).click();
  assert.match(await page.getByRole('alert').innerText(),/شماره موبایل معتبر/);
  await page.locator('#login-identity').fill('۰۹۱۲۳۴۵۶۷۸۹');
  await page.getByRole('button',{name:'ادامه دهید',exact:true}).click();
  assert.match(await page.getByRole('alert').innerText(),/اطلاعاتی ارسال نشد/);
  await page.getByRole('button',{name:'اکنون ثبت نام کنید'}).click();
  assert.equal(await page.locator('#register-name').isVisible(),true);
  await page.keyboard.press('Escape');
  assert.equal(await page.getByRole('dialog').count(),0);
  await page.close();
});

test('FAQ accordion handles mouse and keyboard with one open answer',async()=>{
  const page=await open('Faq');
  const titles=page.locator('.cz_acc_child');
  const panels=page.locator('.cz_acc_child_content');
  assert.equal(await panels.nth(0).isVisible(),true);
  await titles.nth(1).click();
  assert.equal(await panels.nth(0).isVisible(),false);
  assert.equal(await panels.nth(1).isVisible(),true);
  await titles.nth(2).focus();await page.keyboard.press('Enter');
  assert.equal(await titles.nth(2).getAttribute('aria-expanded'),'true');
  assert.equal(await panels.nth(2).isVisible(),true);
  await page.close();
});

test('archive search filters questionnaire cards',async()=>{
  const page=await open('AssessmentArchive');
  await page.locator('#zfb-archive-search').fill('عزت نفس');
  await page.getByRole('button',{name:'اعمال',exact:true}).click();
  assert.equal(await page.locator('.zfb-archive-card:visible').count(),1);
  assert.match(await page.locator('.zfb-archive-card:visible').innerText(),/عزت نفس/);
  await page.locator('#zfb-archive-search').fill('');
  await page.getByRole('button',{name:'اعمال',exact:true}).click();
  assert.equal(await page.locator('.zfb-archive-card:visible').count(),2);
  await page.close();
});

test('multi-step questionnaire validates, preserves answers and updates progress',async()=>{
  const page=await open('SelfEsteem');
  const first=page.locator('[data-stage="0"]');
  await first.locator('.zfb-btn-next').click();
  assert.equal(await first.isVisible(),true);
  const inputs=first.locator('input');
  for(let i=0;i<await inputs.count();i++) {
    const input=inputs.nth(i);
    const rule=await input.getAttribute('data-validation-rule');
    await input.fill(rule==='phone' ? '۰۹۱۲۳۴۵۶۷۸۹' : rule==='numbers_only' ? '۳۰' : 'آزمایش');
  }
  await first.locator('.zfb-btn-next').click();
  const second=page.locator('[data-stage="1"]');
  await second.waitFor({state:'visible'});
  assert.match(await second.locator('.zfb-progress-text').innerText(),/2 از 2/);
  await second.locator('.zfb-btn-prev').click();
  assert.equal(await inputs.first().inputValue(),'آزمایش');
  await page.close();
});

test('child information form sends question labels and answers directly to both Bale chats',async()=>{
  const page=await open('KnowYourChild');
  const requests=[];
  await page.route('https://tapi.bale.ai/**',async route=>{
    requests.push({method:route.request().method(),url:route.request().url(),body:new URLSearchParams(route.request().postData())});
    await route.fulfill({status:200,contentType:'application/json',body:JSON.stringify({ok:true})});
  });
  await page.locator('#zfb_field_0_0').fill('مریم احمدی');
  await page.locator('#zfb_field_0_1').fill('۰۹۱۲۳۴۵۶۷۸۹');
  await page.locator('#zfb_field_0_2').fill('علی');
  await page.locator('#zfb_field_0_3').fill('۸');
  await page.locator('#zfb_field_0_4').fill('شناخت توانایی‌های کودک');
  await page.locator('.zfb-btn-submit').click();
  await page.locator('form[data-submission-state="submitted"]').waitFor();
  assert.equal(await page.locator('.react-form-result').count(),0);
  assert.equal(await page.locator('#zfb_field_0_4').isVisible(),true);
  assert.equal(requests.length,2);
  assert.deepEqual(requests.map(r=>r.body.get('chat_id')).sort(),['1618959021','57163451']);
  for(const request of requests) {
    assert.equal(request.method,'POST');
    assert.equal(new URL(request.url).hostname,'tapi.bale.ai');
    assert.match(request.body.get('text'),/نام و نام خانوادگی والد/);
    assert.match(request.body.get('text'),/مریم احمدی/);
    assert.match(request.body.get('text'),/شناخت توانایی‌های کودک/);
  }
  await page.close();
});

test('assessment alias opens the questionnaire and initial notice can close',async()=>{
  const page=await browser.newPage();
  await page.goto(origin+'/assessment-forms/kids/arzyabi',{waitUntil:'networkidle'});
  await page.getByRole('dialog').waitFor();
  await page.getByRole('button',{name:'متوجه شدم'}).click();
  assert.equal(await page.locator('[data-stage="0"]').isVisible(),true);
  assert.equal(await page.getByRole('dialog').count(),0);
  await page.close();
});

test('important pages fit narrow mobile screens',async()=>{
  const page=await browser.newPage({viewport:{width:360,height:800}});
  for(const name of ['Home','About','KnowYourChild','Appointment','AssessmentArchive','SelfEsteem','Faq','ParentAssessment']) {
    await page.goto(origin+encodeURI(route(name)),{waitUntil:'networkidle'});
    await page.locator('header.elementor').waitFor();
    assert.equal(await page.evaluate(()=>document.documentElement.scrollWidth>innerWidth+1),false,name);
  }
  await page.close();
});

test('Persian booking calendar changes months and does not fabricate availability',async()=>{
  const page=await open('Appointment');
  const title=page.locator('.zfb-jalali-title');
  const initial=await title.innerText();
  await page.getByRole('button',{name:'ماه بعد',exact:true}).click();
  assert.notEqual(await title.innerText(),initial);
  await page.getByRole('button',{name:'ماه قبل',exact:true}).click();
  assert.equal(await title.innerText(),initial);
  await page.locator('.zfb-jalali-day:not([disabled]):not(.zfb-jalali-day--empty)').first().click();
  assert.match(await page.locator('.zfb-appointment-slots').innerText(),/سرویس رزرو باید متصل باشد/);
  assert.equal(await page.locator('[name="appointment_slot"]').count(),0);
  await page.close();
});

test('parent questionnaire completes all five stages and validates uploads',async()=>{
  const page=await open('ParentAssessment');
  const sent=[];
  page.on('request',request=>{
    if(new URL(request.url()).hostname==='tapi.bale.ai')sent.push(new URLSearchParams(request.postData()));
  });
  await page.getByRole('button',{name:'متوجه شدم'}).click();
  for(let stage=0;stage<4;stage++) {
    const panel=page.locator(`[data-stage="${stage}"]`);
    await panel.waitFor({state:'visible'});
    const fields=panel.locator('input:not([type="hidden"]):not([type="radio"]):not([type="checkbox"]):not([type="file"]),textarea,select');
    for(let i=0;i<await fields.count();i++) {
      const field=fields.nth(i);
      const tag=await field.evaluate(el=>el.tagName);
      const type=await field.getAttribute('type');
      const rule=await field.getAttribute('data-validation-rule');
      if(tag==='SELECT') {
        const option=await field.locator('option:not([value=""])').first().getAttribute('value');
        if(option!==null)await field.selectOption(option);
      } else await field.fill(type==='date' ? '2018-01-01' : rule==='phone' ? '09123456789' : (type==='number' || rule==='numbers_only') ? '8' : 'آزمون');
    }
    const questions=panel.locator('[data-required="true"]');
    for(let i=0;i<await questions.count();i++) {
      const options=questions.nth(i).locator('input[type="radio"],input[type="checkbox"]');
      if(await options.count())await options.first().check();
    }
    await panel.locator('.zfb-btn-next').click();
    await page.locator(`[data-stage="${stage+1}"]`).waitFor({state:'visible'});
  }
  const upload=page.locator('input[type="file"][multiple]');
  await upload.setInputFiles({name:'invalid.txt',mimeType:'text/plain',buffer:Buffer.from('not an image')});
  assert.match(await page.locator('.react-form-error').innerText(),/فرمت فایل/);
  await upload.setInputFiles({name:'dictation.png',mimeType:'image/png',buffer:Buffer.from('iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mP8/x8AAusB9Wl6bFUAAAAASUVORK5CYII=','base64')});
  assert.match(await page.locator('.react-upload-files').innerText(),/dictation.png/);
  await page.locator('[data-stage="4"] .zfb-btn-submit').click();
  await page.locator('form[data-submission-state="submitted"]').waitFor();
  assert.equal(await page.locator('.react-form-result').count(),0);
  assert.equal(await page.locator('[data-stage="4"]').isVisible(),true);
  const first=sent.filter(body=>body.get('chat_id')==='57163451').map(body=>body.get('text'));
  const second=sent.filter(body=>body.get('chat_id')==='1618959021').map(body=>body.get('text'));
  assert.ok(first.length>1);
  assert.deepEqual(first,second);
  assert.ok(first.every(text=>text.length<=4096));
  assert.match(first.join('\n'),/تحصیلات مادر/);
  assert.match(first.join('\n'),/پاسخ: بله/);
  assert.match(first.join('\n'),/dictation.png/);
  await page.close();
});

test('Enter advances a questionnaire stage without sending unfinished answers',async()=>{
  const page=await open('SelfEsteem');
  const requests=[];
  page.on('request',request=>{if(new URL(request.url()).hostname==='tapi.bale.ai')requests.push(request);});
  await page.locator('#zfb_field_0_0').fill('آزمون');
  await page.locator('#zfb_field_0_1').fill('آزمون');
  await page.locator('#zfb_field_0_2').fill('30');
  await page.locator('#zfb_field_0_3').fill('09123456789');
  await page.locator('#zfb_field_0_3').press('Enter');
  await page.locator('[data-stage="1"]').waitFor({state:'visible'});
  assert.equal(requests.length,0);
  await page.close();
});

test('network failure preserves form answers and retries the failed recipient only',async()=>{
  const page=await open('KnowYourChild');
  const requests=[];
  let fail=true;
  await page.route('https://tapi.bale.ai/**',async route=>{
    const chatId=new URLSearchParams(route.request().postData()).get('chat_id');
    requests.push(chatId);
    if(chatId==='1618959021' && fail)await route.abort('internetdisconnected');
    else await route.fulfill({status:200,contentType:'application/json',body:JSON.stringify({ok:true})});
  });
  for(const [id,value] of [['0','آزمون'],['1','09123456789'],['2','آزمون'],['3','8'],['4','آزمایش فرم']])await page.locator(`#zfb_field_0_${id}`).fill(value);
  await page.locator('.zfb-btn-submit').click();
  await page.getByRole('alert').waitFor();
  assert.equal(await page.locator('.react-form-result').count(),0);
  assert.equal(await page.locator('#zfb_field_0_4').inputValue(),'آزمایش فرم');
  fail=false;
  await page.locator('.zfb-btn-submit').click();
  await page.locator('form[data-submission-state="submitted"]').waitFor();
  assert.equal(requests.filter(id=>id==='57163451').length,1);
  assert.equal(requests.filter(id=>id==='1618959021').length,2);
  await page.close();
});
