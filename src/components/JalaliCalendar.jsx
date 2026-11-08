import { useState } from 'react';
import { monthCalendar, monthStart, shiftPersianMonth, tehranDateKey } from '../lib/calendar.mjs';

export default function JalaliCalendar({value,onChange}) {
  const [view,setView]=useState(()=>monthStart(new Date()));
  const calendar=monthCalendar(view);
  const today=tehranDateKey();
  return <div className="zfb-jalali-calendar" aria-label="تقویم شمسی رزرو">
    <div className="zfb-jalali-header"><button type="button" className="zfb-jalali-prev" aria-label="ماه قبل" onClick={()=>setView(date=>shiftPersianMonth(date,-1))}>‹</button><span className="zfb-jalali-title" aria-live="polite">{calendar.label}</span><button type="button" className="zfb-jalali-next" aria-label="ماه بعد" onClick={()=>setView(date=>shiftPersianMonth(date,1))}>›</button></div>
    <div className="zfb-jalali-weekdays" aria-hidden="true">{['ش','ی','د','س','چ','پ','ج'].map((day,i)=><span key={i}>{day}</span>)}</div>
    <div className="zfb-jalali-days">{Array.from({length:calendar.startWeekday},(_,i)=><span className="zfb-jalali-day zfb-jalali-day--empty" key={`empty-${i}`} />)}{calendar.days.map(day=>{
      const disabled=day.key<today;
      return <button type="button" key={day.key} className={`zfb-jalali-day ${disabled ? 'zfb-jalali-day--disabled' : ''} ${value===day.key ? 'zfb-jalali-day--selected' : ''}`} disabled={disabled} aria-label={new Intl.DateTimeFormat('fa-IR-u-ca-persian',{timeZone:'Asia/Tehran',dateStyle:'full'}).format(day.date)} aria-pressed={value===day.key} onClick={()=>onChange(day.key)}>{day.label}</button>;
    })}</div>
  </div>;
}
