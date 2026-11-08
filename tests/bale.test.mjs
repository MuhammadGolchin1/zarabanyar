import { test } from 'node:test';
import assert from 'node:assert/strict';
import { splitBaleText, sendBaleSubmission } from '../src/lib/bale.mjs';

const opaque=()=>({type:'opaque'});

test('long Persian answers split losslessly below the API limit without breaking emoji',()=>{
  const text=('سؤال: وضعیت کودک؟\nپاسخ: متن فارسی & + ؟ 😀\n').repeat(300)+'پایان';
  const chunks=splitBaleText(text);
  assert.equal(chunks.join(''),text);
  assert.ok(chunks.length>1);
  for(const chunk of chunks){assert.ok(chunk.length<=3500);assert.ok(!/[\uD800-\uDBFF]$/.test(chunk));}
  assert.deepEqual(splitBaleText('a😀b',2),['a','😀','b']);
});

test('both recipients begin concurrently using simple no-cors browser POSTs',async()=>{
  const requests=[],resolvers=[];
  const sending=sendBaleSubmission({messages:['آزمون & + =\nخط دوم'],delivery:new Map()},{fetchImpl:(url,options)=>{
    requests.push({url,options});return new Promise(resolve=>resolvers.push(resolve));
  }});
  assert.equal(requests.length,2);
  assert.deepEqual(requests.map(r=>r.options.body.get('chat_id')).sort(),['1618959021','57163451']);
  for(const {options} of requests){
    assert.equal(options.method,'POST');assert.equal(options.mode,'no-cors');assert.equal(options.credentials,'omit');
    assert.equal(options.body.get('text'),'آزمون & + =\nخط دوم');
    assert.equal(options.headers,undefined);
  }
  resolvers.forEach(resolve=>resolve(opaque()));await sending;
});

test('multipart reports stay ordered and a retry skips already dispatched parts',async()=>{
  const calls=[];
  let fail=true;
  const submission={messages:['بخش اول','بخش دوم','بخش سوم'],delivery:new Map()};
  const fetchImpl=async(_,options)=>{
    const chat=options.body.get('chat_id'),text=options.body.get('text');calls.push({chat,text});
    if(chat==='1618959021' && text==='بخش دوم' && fail)throw new TypeError('Network failed');
    return opaque();
  };
  await assert.rejects(sendBaleSubmission(submission,{fetchImpl,pause:async()=>{}}),/1618959021/);
  fail=false;
  await sendBaleSubmission(submission,{fetchImpl,pause:async()=>{}});
  assert.deepEqual(calls.filter(c=>c.chat==='57163451').map(c=>c.text),submission.messages);
  assert.deepEqual(calls.filter(c=>c.chat==='1618959021').map(c=>c.text),['بخش اول','بخش دوم','بخش دوم','بخش سوم']);
});

test('a readable API rejection does not count as a completed request',async()=>{
  const submission={messages:['آزمون'],delivery:new Map()};
  await assert.rejects(sendBaleSubmission(submission,{fetchImpl:async()=>({type:'cors',ok:true,json:async()=>({ok:false})})}),/ارسال درخواست/);
  assert.ok([...submission.delivery.values()].every(parts=>parts.size===0));
});
