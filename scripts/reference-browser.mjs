import { chromium } from 'playwright';
import fs from 'node:fs/promises';

const browser = await chromium.launch({ executablePath: 'C:/Program Files/Google/Chrome/Application/chrome.exe', headless: true });
const page = await browser.newPage({viewport:{width:1440,height:1000},deviceScaleFactor:1});
await fs.mkdir('reference/screenshots',{recursive:true});
const paths = ['/'];
for (let i = 0; i < paths.length; i++) {
  try {
    await page.goto('https://zarabanyar.com'+paths[i],{waitUntil:'networkidle',timeout:60000});
    await page.evaluate(async()=>{
      document.querySelector('.elementor-main-swiper')?.swiper?.autoplay?.stop();
      for(let y=0;y<document.body.scrollHeight;y+=700){window.scrollTo({top:y,behavior:'instant'});await new Promise(resolve=>setTimeout(resolve,120));}
      window.scrollTo({top:0,behavior:'instant'});
    });
    await page.waitForTimeout(800);
    await page.screenshot({path:`reference/screenshots/${i}.png`,fullPage:true});
    console.log(i,await page.title(),await page.locator('body').innerText().then(t=>t.slice(0,300)));
    if(i===0) {
      await fs.writeFile('reference/browser-home.html',await page.content());
      await page.setViewportSize({width:390,height:844});
      await page.screenshot({path:'reference/screenshots/mobile.png',fullPage:true});
      await page.setViewportSize({width:1440,height:1000});
      await fs.writeFile('reference/home-layout.json',JSON.stringify(await page.evaluate(()=>{
        const selectors=['header','.elementor-slides-wrapper','.elementor-element-416cad5','.cz_team','.cz_grid','.elementor-post__thumbnail__link','.elementor-post__thumbnail','.elementor-post__thumbnail img','footer'];
        return selectors.map(selector=>{const el=document.querySelector(selector),s=el&&getComputedStyle(el),r=el&&el.getBoundingClientRect();return {selector,box:r?{x:r.x,y:r.y,w:r.width,h:r.height}:null,styles:s?{display:s.display,padding:s.padding,position:s.position,transform:s.transform,width:s.width,height:s.height,objectFit:s.objectFit}:null};});
      }),null,2));
      await page.locator('.digits-login-modal').click();
      await page.waitForTimeout(700);
      await page.screenshot({path:'reference/screenshots/login.png'});
    }
  } catch(error) {console.log('ERROR',i,error.message);}
}
await browser.close();
