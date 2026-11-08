import { before, after, test } from 'node:test';
import assert from 'node:assert/strict';
import { createServer } from 'node:http';
import { readFile, stat } from 'node:fs/promises';
import { existsSync } from 'node:fs';
import { resolve, join, extname, relative } from 'node:path';
import { build } from 'vite';
import { chromium } from 'playwright';

const base='/zarabanyar/';
const directory=resolve('.local/pages-test');
const origin='http://127.0.0.1:5177';
const routes=JSON.parse(await readFile('src/routes.json','utf8'));
const contentTypes={'.html':'text/html; charset=utf-8','.js':'text/javascript','.css':'text/css','.json':'application/json','.svg':'image/svg+xml','.avif':'image/avif','.webp':'image/webp','.png':'image/png','.woff':'font/woff','.woff2':'font/woff2'};
let server,browser;

before(async()=>{
  await build({base,build:{outDir:directory},logLevel:'error'});
  server=createServer(async(request,response)=>{
    const pathname=decodeURIComponent(new URL(request.url,origin).pathname);
    if(!pathname.startsWith(base)){response.writeHead(404);response.end();return;}
    let file=resolve(directory,pathname.slice(base.length));
    if(relative(directory,file).startsWith('..')){response.writeHead(403);response.end();return;}
    let status=200;
    try{if((await stat(file)).isDirectory())file=join(file,'index.html');await stat(file);}
    catch{file=join(directory,'404.html');status=404;}
    response.writeHead(status,{'Content-Type':contentTypes[extname(file)] || 'application/octet-stream'});
    response.end(await readFile(file));
  });
  await new Promise(resolve=>server.listen(5177,'127.0.0.1',resolve));
  const executablePath=process.env.BROWSER_EXECUTABLE_PATH || ['C:/Program Files/Google/Chrome/Application/chrome.exe','C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe','/usr/bin/chromium','/usr/bin/google-chrome'].find(existsSync);
  browser=await chromium.launch({headless:true,...(executablePath ? {executablePath} : {})});
});
after(async()=>{await browser?.close();if(server)await new Promise(resolve=>server.close(resolve));});

test('Pages build serves every original route directly under the repository prefix',async()=>{
  const page=await browser.newPage({viewport:{width:1440,height:1000}});
  const failures=[];
  page.on('pageerror',error=>failures.push(error.message));
  page.on('response',response=>{if(response.status()>=400)failures.push(`${response.status()} ${response.url()}`);});
  page.on('request',request=>{if(request.url().startsWith(origin) && !new URL(request.url()).pathname.startsWith(base))failures.push(`Outside Pages base: ${request.url()}`);});
  for(const route of routes) {
    const response=await page.goto(origin+base+encodeURI(route.path.slice(1)),{waitUntil:'networkidle'});
    assert.equal(response.status(),200,route.name);
    await page.locator('header.elementor').waitFor();
    assert.equal(await page.locator('footer.elementor').count(),1,route.name);
  }
  assert.deepEqual(failures,[]);
  await page.close();
});

test('Pages navigation, reload, thumbnails and mobile menu preserve the deployment prefix',async()=>{
  const page=await browser.newPage({viewport:{width:390,height:844}});
  await page.goto(origin+base,{waitUntil:'networkidle'});
  await page.locator('header .icon_dropdown_menu').click();
  await page.locator('header .dropdown_menu a').first().click();
  await page.waitForURL(`${origin}${base}about-us/`);
  assert.equal((await page.reload({waitUntil:'networkidle'})).status(),200);
  await page.locator('[data-elementor-id="881"]').waitFor();
  for(const href of await page.locator('header a[href^="/"],footer a[href^="/"]').evaluateAll(anchors=>anchors.map(anchor=>anchor.getAttribute('href'))))assert.ok(href.startsWith(base),href);
  const images=await page.locator('img').evaluateAll(images=>images.filter(image=>image.getClientRects().length && image.loading!=='lazy').map(image=>({src:image.currentSrc,loaded:image.complete && image.naturalWidth>0})));
  assert.ok(images.every(image=>image.loaded));
  await page.goto(`${origin}${base}assessment-forms/kids/arzyabi/`,{waitUntil:'networkidle'});
  await page.getByRole('dialog').waitFor();
  await page.getByRole('button',{name:'متوجه شدم'}).click();
  assert.equal(await page.locator('[data-stage="0"]').isVisible(),true);
  await page.close();
});

test('unknown Pages routes use the app 404 while preserving the home link prefix',async()=>{
  const page=await browser.newPage();
  const response=await page.goto(`${origin}${base}unknown-page/`,{waitUntil:'networkidle'});
  assert.equal(response.status(),404);
  await page.locator('.react-not-found').waitFor();
  assert.equal(await page.locator('.react-not-found a').getAttribute('href'),base);
  await page.close();
});
