import {chromium} from 'playwright';
const browser=await chromium.launch({executablePath:'C:/Program Files/Google/Chrome/Application/chrome.exe',headless:true});
const page=await browser.newPage({viewport:{width:1440,height:1000}});
page.on('response',response=>{if(response.status()>=400)console.log('HTTP',response.status(),response.url());});
await page.goto('http://127.0.0.1:5173/',{waitUntil:'networkidle'});
console.log(JSON.stringify(await page.evaluate(()=>({
  sheets:[...document.styleSheets].map(s=>({href:s.href,count:s.cssRules.length,header:[...s.cssRules].filter(r=>r.cssText.includes('71bd8fc')).length,tail:[...s.cssRules].slice(-3).map(r=>r.cssText.slice(0,150))})),
  elements:['header','header>.e-con','.elementor-slides-wrapper','.elementor-slide-heading','.swiper-slide-bg','.elementor-4109','.elementor-element-e90d6d3 img'].map(s=>{const e=document.querySelector(s);const c=e&&getComputedStyle(e);return{selector:s,style:e?{display:c.display,width:c.width,height:c.height,font:c.fontFamily,background:c.backgroundImage}:null}})
})),null,2));
await page.screenshot({path:'test-results/diagnose.png'});
await page.locator('.digits-login-modal').click();
await page.getByRole('dialog').waitFor();
await page.screenshot({path:'test-results/Login.png'});
await browser.close();
