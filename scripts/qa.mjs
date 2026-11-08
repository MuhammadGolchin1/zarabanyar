import { chromium } from 'playwright';
import fs from 'node:fs/promises';

const routes=JSON.parse(await fs.readFile('src/routes.json','utf8'));
const browser=await chromium.launch({executablePath:'C:/Program Files/Google/Chrome/Application/chrome.exe',headless:true});
const page=await browser.newPage({viewport:{width:1440,height:1000},deviceScaleFactor:1});
const errors=[], failures=[], externals=[];
page.on('pageerror',error=>errors.push(error.message));
page.on('console',message=>{if(message.type()==='error')errors.push(message.text());});
page.on('requestfailed',request=>failures.push({url:request.url(),error:request.failure()?.errorText}));
page.on('response',response=>{if(response.status()>=400)failures.push({url:response.url(),status:response.status()});});
page.on('request',request=>{if(!request.url().startsWith('http://127.0.0.1:5173') && !request.url().startsWith('data:'))externals.push(request.url());});
await fs.mkdir('test-results',{recursive:true});
const results=[];
for (const route of routes.filter(r=>r.name!=='AssessmentRedirect')) {
  await page.goto('http://127.0.0.1:5173'+encodeURI(route.path),{waitUntil:'networkidle'});
  await page.locator('header.elementor').waitFor();
  const result={name:route.name,title:await page.title(),text:(await page.locator('body').innerText()).slice(0,140),overflow:await page.evaluate(()=>document.documentElement.scrollWidth>innerWidth+1)};
  if(route.name!=='ParentAssessment') {
    await page.evaluate(async()=>{for(let y=0;y<document.body.scrollHeight;y+=800){window.scrollTo({top:y,behavior:'instant'});await new Promise(resolve=>setTimeout(resolve,80));}window.scrollTo({top:0,behavior:'instant'});});
    await page.evaluate(()=>document.fonts.ready);
  }
  await page.screenshot({path:`test-results/${route.name}.png`,fullPage:true});
  results.push(result);
}
await page.goto('http://127.0.0.1:5173/',{waitUntil:'networkidle'});
await page.screenshot({path:'test-results/Home-top.png'});
await page.setViewportSize({width:390,height:844});
await page.evaluate(async()=>{for(let y=0;y<document.body.scrollHeight;y+=700){window.scrollTo({top:y,behavior:'instant'});await new Promise(resolve=>setTimeout(resolve,80));}window.scrollTo({top:0,behavior:'instant'});});
await page.screenshot({path:'test-results/Home-mobile.png',fullPage:true});
await page.locator('header .icon_dropdown_menu').click();
results.push({test:'mobile-menu',visible:await page.locator('header .dropdown_menu').isVisible()});
await page.locator('header .dropdown_menu a').first().click();
await page.waitForURL('**/about-us/');
results.push({test:'mobile-navigation',url:page.url()});
await fs.writeFile('test-results/report.json',JSON.stringify({results,errors:[...new Set(errors)],failures,externals:[...new Set(externals)]},null,2));
console.log(JSON.stringify({results,errors:[...new Set(errors)],failures:failures.slice(0,20),externals:[...new Set(externals)]},null,2));
await browser.close();
