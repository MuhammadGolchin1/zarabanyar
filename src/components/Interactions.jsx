import { Children, cloneElement, createContext, isValidElement, useContext, useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import { api, hasApi, validationMessage } from '../lib/api';
import JalaliCalendar from './JalaliCalendar';
import { buildBaleSubmission, sendBaleSubmission } from '../lib/bale.mjs';

function useModal(ref, close) {
  useEffect(() => {
    const previous = document.activeElement;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    const target = ref.current;
    const items = () => [...target.querySelectorAll('button, a[href], input, select, textarea, [tabindex="0"]')].filter(n => !n.disabled && n.getClientRects().length);
    (target.querySelector('[data-autofocus]') || items()[0] || target).focus();
    const onKey = event => {
      if (event.key === 'Escape') close();
      if (event.key !== 'Tab') return;
      const list = items();
      const first = list[0], last = list.at(-1);
      if (!first) { event.preventDefault(); return; }
      if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last.focus(); }
      else if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first.focus(); }
    };
    target.addEventListener('keydown', onKey);
    return () => {
      target.removeEventListener('keydown', onKey);
      document.body.style.overflow = previousOverflow;
      if (previous?.isConnected) previous.focus();
    };
  }, [ref, close]);
}

export function Modal({ children, close, label, className = '' }) {
  const ref = useRef(null);
  const closeRef = useRef(close);
  closeRef.current = close;
  const stableClose = useRef(() => closeRef.current()).current;
  useModal(ref, stableClose);
  return createPortal(<div className={`react-modal-overlay ${className}`} onClick={e => { if (e.target === e.currentTarget) close(); }}>
    <section className="react-modal" ref={ref} role="dialog" aria-modal="true" aria-label={label} tabIndex={-1}>
      <button className="react-modal-close" aria-label="بستن" onClick={close}>×</button>
      {children}
    </section>
  </div>, document.body);
}

export function HeroSlider({ children, className, ...props }) {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const wrapper = Children.toArray(children).find(isValidElement);
  const slides = Children.toArray(wrapper?.props.children).filter(isValidElement);
  const touchStart = useRef(null);
  useEffect(() => {
    if (paused || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const timer = setInterval(() => setActive(n => (n + 1) % slides.length), 5000);
    return () => clearInterval(timer);
  }, [paused, slides.length]);
  const move = delta => setActive(n => (n + delta + slides.length) % slides.length);
  return <div {...props} className={`${className} react-slider`} onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)}
    onFocusCapture={() => setPaused(true)} onBlurCapture={() => setPaused(false)} onKeyDown={e => { if (e.key === 'ArrowLeft') move(1); if (e.key === 'ArrowRight') move(-1); }}
    onTouchStart={e => { touchStart.current = e.touches[0].clientX; }} onTouchEnd={e => { const distance = e.changedTouches[0].clientX - touchStart.current; if (Math.abs(distance) > 50) move(distance > 0 ? 1 : -1); }}>
    {wrapper && cloneElement(wrapper, {}, slides.map((slide, i) => cloneElement(slide, {key:i, className:`${slide.props.className} ${i === active ? 'swiper-slide-active' : ''}`, 'aria-hidden':i !== active, style:{...slide.props.style,display:i === active ? undefined : 'none'}})))}
  </div>;
}

const FormContext = createContext(null);
export function ReferenceForm({ children, formId, totalStages, ...props }) {
  const [stage, setStage] = useState(0);
  const [error, setError] = useState('');
  const [status, setStatus] = useState('idle');
  const ref = useRef(null);
  const submissionRef = useRef(null);
  const submittingRef = useRef(false);
  function validate(scope) {
    const fields = [...scope.querySelectorAll('input:not([type="hidden"]), textarea, select')];
    for (const input of fields) {
      if (input.disabled || input.type === 'file') continue;
      input.setCustomValidity(validationMessage(input.value, input.dataset.validationRule));
      if (!input.checkValidity()) { input.reportValidity(); input.focus(); return false; }
    }
    for (const question of scope.querySelectorAll('[data-required="true"]')) {
      if(question.dataset.questionType==='appointment') {
        const date=question.querySelector('input[name="appointment_date"]')?.value;
        const slot=question.querySelector('input[name="appointment_slot"]:checked');
        if(!date || !slot) {
          setError(!date ? 'تاریخ مورد نظر را انتخاب کنید.' : hasApi ? 'لطفاً یک زمان مشاوره انتخاب کنید.' : 'رزرو نوبت به اتصال سرویس آنلاین نیاز دارد. نوبتی ثبت نشد.');
          question.scrollIntoView({behavior:'smooth',block:'center'});
          return false;
        }
      }
      const radios = [...question.querySelectorAll('input[type="radio"], input[type="checkbox"]')];
      if (radios.length && !radios.some(input => input.checked)) {
        setError('لطفاً به تمام پرسش‌های الزامی این مرحله پاسخ دهید.');
        question.scrollIntoView({ behavior:'smooth', block:'center' });
        radios[0].focus();
        return false;
      }
    }
    setError('');
    return true;
  }
  function move(delta) {
    const current = ref.current.querySelector(`[data-stage="${stage}"]`);
    if (delta > 0 && !validate(current)) return;
    setStage(n => Math.max(0, Math.min(totalStages-1, n+delta)));
    setError('');
    ref.current.closest('.zfb-form-container').scrollIntoView({behavior:'smooth',block:'start'});
  }
  function change(event) {
    const input=event.target;
    input.setCustomValidity?.('');
    if(input.type==='checkbox' && input.checked) {
      const group=[...ref.current.elements].filter(field=>field.type==='checkbox' && field.name===input.name && field!==input);
      group.forEach(field=>{if(input.dataset.zfbNoneOption || field.dataset.zfbNoneOption)field.checked=false;});
    }
    setError('');
    submissionRef.current=null;
  }
  async function submit(event) {
    event.preventDefault();
    if (submittingRef.current) return;
    if (stage < totalStages - 1) {move(1);return;}
    for (let i=0;i<totalStages;i++) {
      const scope=ref.current.querySelector(`[data-stage="${i}"]`);
      if (scope && i===stage && !validate(scope)) return;
    }
    submittingRef.current=true;
    if (!submissionRef.current) {
      const title=ref.current.closest('.zfb-form-container')?.querySelector('.zfb-form-header h2')?.textContent || document.title;
      submissionRef.current=buildBaleSubmission(ref.current,{formId,title});
    }
    setError('');
    setStatus('sending');
    try { await sendBaleSubmission(submissionRef.current); setStatus('submitted'); }
    catch (e) {setError(e.message);setStatus('idle');}
    finally {submittingRef.current=false;}
  }
  return <FormContext.Provider value={{stage,totalStages,move}}><form {...props} ref={ref} noValidate onSubmit={submit} onChange={change} aria-busy={status==='sending'} data-submission-state={status}>
    <fieldset className="react-form-fieldset" disabled={status==='sending'}>{children}</fieldset>
    {error && <p className="react-form-error" role="alert">{error}</p>}
  </form></FormContext.Provider>;
}

export function FormStage({children,className,...props}) {
  const {stage}=useContext(FormContext);
  const active=Number(props['data-stage'])===stage;
  return <div {...props} className={`${className.replace(/\bactive\b/g,'')} ${active ? 'active' : ''}`} hidden={!active}>{children}</div>;
}
export function FormProgress() {
  const {stage,totalStages}=useContext(FormContext);
  return <div className="zfb-form-progress"><div className="zfb-progress-bar" role="progressbar" aria-valuemin={1} aria-valuemax={totalStages} aria-valuenow={stage+1} aria-label="پیشرفت فرم"><div className="zfb-progress-fill" style={{width:`${(stage+1)/totalStages*100}%`}} /></div><span className="zfb-progress-text">مرحله {stage+1} از {totalStages}</span></div>;
}
export function FormButton({children,direction,...props}) {
  const {stage,move}=useContext(FormContext);
  return <button {...props} type="button" disabled={direction==='prev' && stage===0} onClick={() => move(direction==='prev' ? -1 : 1)}>{children}</button>;
}

export function FirstStepNotice({children}) {
  const [open,setOpen]=useState(true);
  return open && <Modal close={() => setOpen(false)} label="راهنمای تکمیل پرسشنامه" className="react-first-step"><div className="zfb-first-step-content">{children}</div><button type="button" className="zfb-btn" onClick={() => setOpen(false)}>متوجه شدم</button></Modal>;
}

export function BookingPicker() {
  const [date,setDate]=useState('');
  const [slots,setSlots]=useState([]);
  const [time,setTime]=useState('');
  const [message,setMessage]=useState('');
  const [loading,setLoading]=useState(false);
  useEffect(() => {
    if (!date) return;
    if (!hasApi) {setMessage('برای نمایش زمان‌های آزاد و ثبت نوبت، سرویس رزرو باید متصل باشد.');return;}
    const controller=new AbortController();
    setLoading(true);setMessage('');
    api(`/appointments/availability?date=${encodeURIComponent(date)}`,{signal:controller.signal}).then(data=>setSlots(data.slots || [])).catch(e=>{if(e.name!=='AbortError')setMessage(e.message);}).finally(()=>setLoading(false));
    return()=>controller.abort();
  },[date]);
  return <div className="zfb-appointment-picker"><div className="zfb-appointment-section zfb-appointment-section--date"><p className="zfb-appointment-section__label">تاریخ را انتخاب کنید</p><input type="hidden" name="appointment_date" value={date} /><JalaliCalendar value={date} onChange={value=>{setDate(value);setTime('');setSlots([]);setMessage('');setLoading(hasApi);}} /></div>
    <div className={`zfb-appointment-section zfb-appointment-section--time ${date ? '' : 'is-disabled'}`}><p className="zfb-appointment-section__label">ساعت را انتخاب کنید</p><div className="zfb-appointment-slots">{!date ? <p className="zfb-appointment-slots-placeholder">ابتدا تاریخ را انتخاب کنید</p> : loading ? <p className="zfb-appointment-loading" role="status">در حال بارگذاری…</p> : (message || !hasApi) ? <p className="zfb-appointment-error" role="status">{message || 'برای نمایش زمان‌های آزاد و ثبت نوبت، سرویس رزرو باید متصل باشد.'}</p> : slots.length ? slots.map(slot=><label key={slot.id} className={`react-time-slot ${time===slot.id ? 'selected' : ''}`}><input type="radio" name="appointment_slot" value={slot.id} checked={time===slot.id} onChange={()=>setTime(slot.id)} required />{slot.label}</label>) : <p className="zfb-appointment-no-slots">زمانی برای این تاریخ موجود نیست</p>}</div></div></div>;
}

export function UploadField(props) {
  const [files,setFiles]=useState([]);
  const [error,setError]=useState('');
  const ref=useRef(null);
  const isGallery=props.multiple;
  function select(list) {
    const values=[...list];
    const maxSize=Number(props['data-max-size'] || 10485760), maxCount=Number(props['data-max-count'] || 1);
    const allowed=(props['data-allowed-types'] || '').split(',').filter(Boolean);
    if(values.length>maxCount){setError(`حداکثر ${maxCount} فایل انتخاب کنید.`);ref.current.value='';return;}
    if(values.some(file=>file.size>maxSize)){setError(`حجم هر فایل باید کمتر از ${maxSize/1048576} مگابایت باشد.`);ref.current.value='';return;}
    if(values.some(file=>allowed.length && !allowed.includes(file.name.split('.').at(-1).toLowerCase()))){setError('فرمت فایل انتخاب‌شده مجاز نیست.');ref.current.value='';return;}
    setError('');setFiles(values);
  }
  return <div className={isGallery ? 'zfb-gallery-upload-container' : 'zfb-file-upload-container'}><div className="react-upload-zone" onDragOver={e=>e.preventDefault()} onDrop={e=>{e.preventDefault();if(ref.current){ref.current.files=e.dataTransfer.files;select(e.dataTransfer.files);}}}>
    <input {...props} ref={ref} type="file" onChange={e=>select(e.target.files)} aria-label={isGallery ? 'انتخاب تصاویر املای کودک' : 'انتخاب فایل صوتی کودک'} />
    <div aria-hidden="true"><span className="react-upload-icon">{isGallery ? '🖼️' : '♫'}</span><p>{isGallery ? 'برای آپلود تصاویر کلیک کنید یا تصاویر را اینجا بکشید' : 'برای آپلود فایل صوتی کلیک کنید یا فایل را اینجا بکشید'}</p></div>
  </div><p className="react-upload-help">{isGallery ? 'حداکثر ۶ تصویر، هر تصویر حداکثر ۵ مگابایت — JPG, PNG, WEBP' : 'حداکثر ۱۰ مگابایت — MP3, WAV, OGG, M4A'}</p>
    {error && <p className="react-form-error" role="alert">{error}</p>}{files.length>0 && <ul className="react-upload-files">{files.map((file,i)=><li key={`${file.name}-${i}`}>{file.name} <small>({Math.ceil(file.size/1024)} KB)</small></li>)}</ul>}
    {files.length>0 && <button type="button" className="react-secondary-btn" onClick={()=>{setFiles([]);ref.current.value='';}}>حذف فایل‌ها</button>}
  </div>;
}

const AccordionContext=createContext(null);
export function Accordion({children,...props}) {
  const [open,setOpen]=useState(0);
  let titleIndex=0,panelIndex=0;
  function assign(nodes) {return Children.map(nodes, child=>{
    if(!isValidElement(child))return child;
    if(child.type===AccordionTitle)return cloneElement(child,{index:titleIndex++});
    if(child.type===AccordionPanel)return cloneElement(child,{index:panelIndex++});
    return child.props.children ? cloneElement(child,{},assign(child.props.children)) : child;
  });}
  return <AccordionContext.Provider value={{open,setOpen}}><div {...props}>{assign(children)}</div></AccordionContext.Provider>;
}
export function AccordionTitle({children,index,...props}) {
  const {open,setOpen}=useContext(AccordionContext);
  const toggle=()=>setOpen(open===index ? null : index);
  return <span {...props} role="button" tabIndex={0} className={`${props.className} ${open===index ? 'cz_active' : ''}`} aria-expanded={open===index} aria-controls={`faq-panel-${index}`} id={`faq-title-${index}`} onClick={toggle} onKeyDown={e=>{if(e.key==='Enter' || e.key===' '){e.preventDefault();toggle();}}}>{children}</span>;
}
export function AccordionPanel({children,index,...props}) {
  const {open}=useContext(AccordionContext);
  return <div {...props} id={`faq-panel-${index}`} role="region" aria-labelledby={`faq-title-${index}`} hidden={open!==index} style={{display:open===index ? 'block' : 'none'}}>{children}</div>;
}

export function SearchArchive({children,...props}) {
  const initial=new URLSearchParams(window.location.search).get('zfb_q') || '';
  const [query,setQuery]=useState(initial);
  const [submitted,setSubmitted]=useState(initial);
  const ref=useRef(null);
  useEffect(()=>{
    const cards=ref.current.closest('.zfb-archive')?.querySelectorAll('.zfb-archive-card') || document.querySelectorAll('.zfb-archive-card');
    cards.forEach(card=>{card.hidden=!card.textContent.includes(submitted);});
  },[submitted]);
  return <form {...props} action={undefined} ref={ref} role="search" onSubmit={e=>{e.preventDefault();setSubmitted(query);const url=new URL(window.location.href);query ? url.searchParams.set('zfb_q',query) : url.searchParams.delete('zfb_q');window.history.replaceState({},'',url);}}>
    <label className="screen-reader-text" htmlFor="zfb-archive-search">جستجو در فرم‌ها</label><input type="search" id="zfb-archive-search" name="zfb_q" placeholder="جستجو در فرم‌ها…" className="zfb-archive-toolbar__input" value={query} onChange={e=>setQuery(e.target.value)} /><button type="submit" className="zfb-archive-toolbar__submit">اعمال</button>
  </form>;
}

export function ImageLightbox({children,href,...props}) {
  const [open,setOpen]=useState(false);
  return <><a {...props} href={href} onClick={e=>{e.preventDefault();e.stopPropagation();setOpen(true);}}>{children}</a>{open && <Modal close={()=>setOpen(false)} label="نمایش تصویر" className="react-lightbox"><img src={href} alt="نمایش بزرگ تصویر" /></Modal>}</>;
}
