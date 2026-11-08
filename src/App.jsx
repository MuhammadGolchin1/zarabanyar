import { lazy, Suspense, useEffect, useLayoutEffect, useState } from 'react';
import routes from './routes.json';
import Header from './components/Header';
import Footer from './components/Footer';
import LoginModal from './components/LoginModal';
import { Modal } from './components/Interactions';
import { siteUrl, sitePath } from './lib/paths';

const modules=import.meta.glob('./pages/*.jsx');
const pages=Object.fromEntries(routes.map(route=>[route.name,lazy(modules[`./pages/${route.name}.jsx`])]));
const parentRoute=routes.find(route=>route.name==='ParentAssessment');
const clean=path=>{try{return decodeURIComponent(path).replace(/\/+$/,'') || '/';}catch{return path;}};

export function resolveRoute(path) {
  const normalized=clean(sitePath(path));
  if(['/arzyabi','/assessment-forms/kids/arzyabi'].includes(normalized))return parentRoute;
  return routes.find(route=>clean(route.path)===normalized);
}

export default function App() {
  const [location,setLocation]=useState(sitePath(window.location.pathname));
  const [login,setLogin]=useState(new URLSearchParams(window.location.search).get('login')==='true');
  const [menu,setMenu]=useState(false);
  const [contact,setContact]=useState(false);
  const [styleLoaded,setStyleLoaded]=useState('');
  const route=resolveRoute(location);
  const stylesheet=siteUrl(route?.stylesheet || '/styles/Home.css');
  const Page=route && pages[route.name];
  useEffect(()=>{
    const onPop=()=>{setLocation(sitePath(window.location.pathname));setLogin(new URLSearchParams(window.location.search).get('login')==='true');setMenu(false);};
    window.addEventListener('popstate',onPop);
    return()=>window.removeEventListener('popstate',onPop);
  },[]);
  useLayoutEffect(()=>{
    document.body.id='intro';
    document.body.className=route?.bodyClass || 'rtl elementor-default elementor-kit-1415';
    document.title=route?.title || 'صفحه پیدا نشد – ضربان‌یار';
    document.documentElement.lang='fa-IR';
    document.documentElement.dir='rtl';
  },[route]);
  useEffect(()=>{
    document.querySelectorAll('header a[href], footer a[href]').forEach(anchor=>{
      const active=clean(sitePath(new URL(anchor.href).pathname))===clean(location);
      anchor.classList.toggle('elementor-item-active',active);
      if(active)anchor.setAttribute('aria-current','page');else anchor.removeAttribute('aria-current');
    });
    document.querySelectorAll('header .icon_dropdown_menu,header .elementor-menu-toggle').forEach(button=>button.setAttribute('aria-expanded',String(menu)));
  },[location,menu,styleLoaded]);
  useEffect(()=>{
    const key=e=>{if(e.key==='Escape')setMenu(false);};
    window.addEventListener('keydown',key);return()=>window.removeEventListener('keydown',key);
  },[]);
  function navigate(path) {
    window.history.pushState({},'',siteUrl(path));
    setLocation(sitePath(window.location.pathname));setMenu(false);setLogin(false);
    window.scrollTo({top:0,behavior:'instant'});
  }
  function click(e) {
    if(e.target.closest('.digits-login-modal')) {e.preventDefault();setLogin(true);return;}
    if(e.target.closest('header .icon_dropdown_menu, header .icon_mobile_dropdown_menu, header .elementor-menu-toggle')) {e.preventDefault();setMenu(v=>!v);return;}
    const anchor=e.target.closest('a[href]');
    if(!anchor || e.defaultPrevented || e.ctrlKey || e.metaKey || e.shiftKey || e.altKey || e.button!==0 || anchor.target==='_blank' || anchor.hasAttribute('download'))return;
    const url=new URL(anchor.href);
    if(url.origin!==window.location.origin)return;
    if(url.searchParams.get('login')==='true'){e.preventDefault();setLogin(true);return;}
    if(url.hash && url.pathname===window.location.pathname)return;
    if(sitePath(url.pathname).startsWith('/assets/'))return;
    e.preventDefault();navigate(url.pathname+url.search+url.hash);
  }
  return <div className={menu ? 'react-app mobile-menu-open' : 'react-app'} onClick={click}>
    <link rel="stylesheet" href={stylesheet} onLoad={()=>setStyleLoaded(stylesheet)} />
    <link rel="stylesheet" href={siteUrl('/app.css')} />
    <Suspense fallback={<div className="react-page-loading" role="status">در حال بارگذاری…</div>}>
      {styleLoaded===stylesheet && (Page ? <Page key={route.name} /> : <div id="layout"><Header /><main className="react-not-found"><h1>صفحه پیدا نشد</h1><p>آدرس واردشده در ضربان‌یار وجود ندارد.</p><a href={siteUrl('/')}>بازگشت به صفحه اصلی</a></main><Footer /></div>)}
    </Suspense>
    {login && <LoginModal close={()=>{setLogin(false);if(new URLSearchParams(window.location.search).has('login'))window.history.replaceState({},'',window.location.pathname);}} />}
    <button type="button" className="react-contact-trigger" aria-label="ارتباط با ما" onClick={()=>setContact(true)}><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><rect x="3" y="5" width="18" height="14" rx="1" /><path d="m3 6 9 7 9-7" /></svg></button>
    {contact && <Modal close={()=>setContact(false)} label="با ما در ارتباط باشید"><h3>با ما در ارتباط باشید</h3><p>ایران، استان تهران، تهران، خیابان آزادی</p><p dir="ltr"><a href="tel:02112345678">02112345678</a><br /><a href="tel:02112345679">02112345679</a></p><a className="zfb-btn" href={siteUrl(routes.find(r=>r.name==='Appointment').path)} onClick={()=>setContact(false)}>رزرو وقت مشاوره</a></Modal>}
  </div>;
}
