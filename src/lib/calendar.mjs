const persianParts=new Intl.DateTimeFormat('en-US-u-ca-persian',{timeZone:'Asia/Tehran',year:'numeric',month:'numeric',day:'numeric'});
const monthLabel=new Intl.DateTimeFormat('fa-IR-u-ca-persian',{timeZone:'Asia/Tehran',month:'long'});
const localDay=new Intl.DateTimeFormat('en-CA',{timeZone:'Asia/Tehran',year:'numeric',month:'2-digit',day:'2-digit'});
const faNumber=new Intl.NumberFormat('fa-IR',{useGrouping:false});

export function toPersianParts(date) {
  return Object.fromEntries(persianParts.formatToParts(date).filter(p=>['year','month','day'].includes(p.type)).map(p=>[p.type,Number(p.value)]));
}
export function addDays(date,days) {
  const next=new Date(date);
  next.setUTCDate(next.getUTCDate()+days);
  return next;
}
export function monthStart(date) {
  const key=localDay.format(date);
  const noon=new Date(`${key}T12:00:00Z`);
  return addDays(noon,1-toPersianParts(noon).day);
}
export function shiftPersianMonth(date,delta) {
  const start=monthStart(date);
  return monthStart(addDays(start,delta>0 ? 32 : -1));
}
export function monthCalendar(date) {
  const start=monthStart(date);
  const parts=toPersianParts(start);
  const days=[];
  for(let offset=0;offset<31;offset++) {
    const current=addDays(start,offset);
    if(toPersianParts(current).month!==parts.month)break;
    days.push({key:localDay.format(current),label:faNumber.format(offset+1),date:current});
  }
  return {label:`${monthLabel.format(start)} ${faNumber.format(parts.year)}`,startWeekday:(start.getUTCDay()+1)%7,days};
}
export function tehranDateKey(date=new Date()){return localDay.format(date);}
