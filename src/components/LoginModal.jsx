import { useState } from 'react';
import { Modal } from './Interactions';
import { api, normalizeDigits, validationMessage } from '../lib/api';

export default function LoginModal({ close }) {
  const [register,setRegister]=useState(false);
  const [method,setMethod]=useState('phone');
  const [step,setStep]=useState('identity');
  const [identity,setIdentity]=useState('');
  const [name,setName]=useState('');
  const [password,setPassword]=useState('');
  const [code,setCode]=useState('');
  const [error,setError]=useState('');
  const [sending,setSending]=useState(false);
  async function submit(e) {
    e.preventDefault();setError('');
    if(method==='phone') {
      const message=validationMessage(identity,'phone');
      if(message){setError(message);return;}
    }
    setSending(true);
    try {
      const body=step==='code' ? {identity:normalizeDigits(identity),code:normalizeDigits(code)} : {identity:method==='phone' ? normalizeDigits(identity) : identity,method,register,name,password};
      const response=await api(step==='code' ? '/auth/verify' : '/auth/request-code',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify(body)});
      if(step==='code') {window.dispatchEvent(new CustomEvent('zarabanyar:authenticated',{detail:response}));close();}
      else setStep('code');
    } catch(err){setError(err.message);}
    finally{setSending(false);}
  }
  return <Modal close={close} label={register ? 'ثبت نام در ضربان‌یار' : 'ورود به ضربان‌یار'} className="react-login-overlay">
    <form className="react-login-form" onSubmit={submit}>
      <h2>{register ? 'ثبت نام' : 'ورود'}</h2>
      {step==='identity' ? <>
        <div className="react-login-tabs" role="group" aria-label="روش ورود">
          <button type="button" aria-pressed={method==='phone'} onClick={()=>{setMethod('phone');setIdentity('');setError('');}}>با شماره موبایل</button>
          <button type="button" aria-pressed={method==='email'} onClick={()=>{setMethod('email');setIdentity('');setError('');}}>با آدرس ایمیل</button>
        </div>
        <label className="screen-reader-text" htmlFor="login-identity">{method==='phone' ? 'شماره تلفن' : 'آدرس ایمیل'}</label>
        <div className="react-login-identity"><input id="login-identity" data-autofocus type={method==='phone' ? 'tel' : 'email'} value={identity} onChange={e=>setIdentity(e.target.value)} placeholder={method==='phone' ? 'شماره تلفن' : 'آدرس ایمیل'} autoComplete={method==='phone' ? 'tel-national' : 'email'} required dir="ltr" />{method==='phone' && <span dir="ltr"><svg className="react-country-flag" viewBox="0 0 24 16" role="img" aria-label="ایران"><rect width="24" height="16" fill="white" /><rect width="24" height="5.33" fill="#239f40" /><rect y="10.67" width="24" height="5.33" fill="#da0000" /><path d="M12 6v4m-2-3c0 3 4 3 4 0m-3-1 1 1 1-1" fill="none" stroke="#da0000" strokeWidth=".7" /></svg> +98</span>}</div>
        {register && <><label htmlFor="register-name">نام</label><input id="register-name" autoComplete="name" placeholder="نام" required value={name} onChange={e=>setName(e.target.value)} /><label htmlFor="register-password">رمزعبور</label><input id="register-password" type="password" autoComplete="new-password" minLength={8} placeholder="رمزعبور" required value={password} onChange={e=>setPassword(e.target.value)} /></>}
      </> : <><p>کد تأیید ارسال‌شده را وارد کنید.</p><label className="screen-reader-text" htmlFor="verification-code">کد تأیید</label><input id="verification-code" inputMode="numeric" autoComplete="one-time-code" pattern="[0-9۰-۹٠-٩]{4,8}" value={code} onChange={e=>setCode(e.target.value)} required /><button type="button" className="react-secondary-btn" onClick={()=>setStep('identity')}>ویرایش شماره یا ایمیل</button></>}
      {error && <p className="react-form-error" role="alert">{error}</p>}
      <button className="react-login-submit" disabled={sending} type="submit">{sending ? 'لطفاً صبر کنید…' : step==='code' ? 'تأیید و ورود' : 'ادامه دهید'}</button>
      <p className="react-login-switch">{register ? 'قبلا عضو شده اید؟' : 'آیا هنوز عضو نشده اید؟'} <button type="button" onClick={()=>{setRegister(v=>!v);setStep('identity');setError('');}}>{register ? 'اکنون وارد شوید' : 'اکنون ثبت نام کنید'}</button></p>
    </form>
  </Modal>;
}
