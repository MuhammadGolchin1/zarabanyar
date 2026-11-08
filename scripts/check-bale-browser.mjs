// Read-only CORS check. This does not send messages or form responses.
import { chromium } from 'playwright';
import { createServer } from 'vite';
import { BALE_API_BASE, BALE_CHAT_IDS } from '../src/lib/bale-config.mjs';

const server=await createServer({server:{host:'127.0.0.1',port:5176,strictPort:true}});
await server.listen();
const browser=await chromium.launch({executablePath:'C:/Program Files/Google/Chrome/Application/chrome.exe',headless:true});
try {
  try {
    const response=await fetch(`${BALE_API_BASE}/getMe`,{headers:{Origin:'http://127.0.0.1:5176'},signal:AbortSignal.timeout(20000)});
    const data=await response.json();
    console.log(JSON.stringify({transport:'node',httpStatus:response.status,ok:data.ok,allowOrigin:response.headers.get('access-control-allow-origin'),description:data.description || null}));
  } catch(error) {console.log(JSON.stringify({transport:'node',error:error.name,cause:error.cause?.code}));}
  for (const chatId of BALE_CHAT_IDS) {
    try {
      const response=await fetch(`${BALE_API_BASE}/getChat?${new URLSearchParams({chat_id:chatId})}`,{signal:AbortSignal.timeout(20000)});
      const data=await response.json();
      console.log(JSON.stringify({chatId,accessible:data.ok,description:data.description || null}));
    }catch(error){console.log(JSON.stringify({chatId,error:error.name}));}
  }
  const page=await browser.newPage();
  page.on('requestfailed',request=>console.log(JSON.stringify({requestFailure:request.failure()?.errorText})));
  await page.goto('http://127.0.0.1:5176/',{waitUntil:'networkidle'});
  const result=await page.evaluate(async endpoint=>{
    try {
      const response=await fetch(`${endpoint}/getMe`,{credentials:'omit',signal:AbortSignal.timeout(20000)});
      const data=await response.json();
      return {readable:true,httpStatus:response.status,ok:data.ok,description:data.description || null};
    }catch(error){return {readable:false,error:error.name};}
  },BALE_API_BASE);
  console.log(JSON.stringify(result));
  console.log(JSON.stringify(await page.evaluate(async endpoint=>{
    try {
      const response=await fetch(`${endpoint}/getMe`,{mode:'no-cors',credentials:'omit',signal:AbortSignal.timeout(20000)});
      return {mode:'no-cors',completed:true,responseType:response.type};
    }catch(error){return {mode:'no-cors',completed:false,error:error.name};}
  },BALE_API_BASE)));
} finally {await browser.close();await server.close();}
