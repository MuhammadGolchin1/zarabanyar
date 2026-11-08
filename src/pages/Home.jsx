import { siteUrl } from '../lib/paths';

const links = {
  assessment: '/assessment-forms/kids/arzyabi/',
  discovery: '/شناخت-کودکتان/',
  appointment: '/رزور-نوبت-مشاوره/',
  selfEsteem: '/forms/اندازه-گیری-عزت-نفس-کلی-و-ارزش-شخصی/',
};

function Icon({ name = 'arrow', size = 24 }) {
  const paths = {
    arrow: <path d="M19 12H5m6-6-6 6 6 6" />,
    check: <path d="m5 12 4 4L19 6" />,
    book: <><path d="M12 5v15M3 4c4-1 6 0 9 2 3-2 5-3 9-2v14c-4-1-6 0-9 2-3-2-5-3-9-2Z" /></>,
    spark: <><path d="m12 3 2.5 6.5L21 12l-6.5 2.5L12 21l-2.5-6.5L3 12l6.5-2.5Z" /><path d="m20 2 .5 1.5L22 4l-1.5.5L20 6l-.5-1.5L18 4l1.5-.5Z" /></>,
    focus: <><circle cx="12" cy="12" r="7" /><circle cx="12" cy="12" r="2" /><path d="M12 2v3m0 14v3M2 12h3m14 0h3" /></>,
    heart: <path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0l-1 1-1-1a5.5 5.5 0 0 0-7.8 7.8L12 21l8.8-8.6a5.5 5.5 0 0 0 0-7.8Z" />,
    chat: <><path d="M21 11.5a8.5 8.5 0 0 1-8.5 8.5H4l-2 2V11.5a9.5 9.5 0 0 1 19 0Z" /><path d="M7 11h.01M12 11h.01M17 11h.01" /></>,
    menu: <path d="M4 7h16M4 12h16M4 17h16" />,
    plus: <path d="M12 5v14M5 12h14" />,
    person: <><circle cx="12" cy="8" r="3.5" /><path d="M5 21v-2a7 7 0 0 1 14 0v2" /></>,
    leaf: <><path d="M20 3C9 2 2 8 5 15c7 5 15-1 15-12Z" /><path d="M3 21 15 9" /></>,
  };
  return <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">{paths[name]}</svg>;
}

function Star({ className }) {
  return <svg className={className} viewBox="0 0 100 100" fill="currentColor" aria-hidden="true"><path d="m50 0 8 28L79 8l-7 28 28-7-20 21 20 8-28 6 7 28-21-20-8 28-8-28-21 20 7-28L0 58l28-8L8 29l28 7-7-28 21 20Z" /></svg>;
}

function ButtonLink({ href, children, secondary = false }) {
  return <a href={siteUrl(href)} className={`zh-button ${secondary ? 'zh-button--secondary' : 'zh-button--primary'}`}>{children}<Icon size={19} /></a>;
}

function HomeHeader() {
  return <header className="elementor zh-header">
    <div className="zh-container zh-header-inner">
      <a className="zh-brand" href={siteUrl('/')} aria-label="ضربان‌یار، صفحه اصلی"><img src={siteUrl('/assets/original/5d550ea6ceb8eb7c.avif')} width="174" height="37" alt="ضربان‌یار" /></a>
      <nav className="zh-desktop-nav" aria-label="منوی اصلی"><a href={siteUrl('/about-us/')}>درباره ما</a><a href="#services">چطور کمک می‌کنیم؟</a><a href="#specialists">متخصصان ما</a><a href="#questions">سؤال‌های شما</a></nav>
      <div className="zh-header-actions">
        <button type="button" className="digits-login-modal zh-login" aria-label="ورود / عضویت"><Icon name="person" size={18} /><span>ورود / عضویت</span></button>
        <a className="zh-header-cta" href={siteUrl(links.assessment)}>شروع ارزیابی<Icon size={17} /></a>
        <button type="button" className="icon_dropdown_menu zh-menu-toggle" aria-label="باز کردن منو" aria-expanded="false" aria-controls="home-mobile-menu"><Icon name="menu" /></button>
      </div>
      <nav className="dropdown_menu zh-mobile-nav" id="home-mobile-menu" aria-label="منوی موبایل"><a href={siteUrl('/about-us/')}>درباره ما</a><a href={siteUrl(links.discovery)}>شناخت کودکتان</a><a href={siteUrl(links.appointment)}>رزرو مشاوره</a><a href={siteUrl(links.assessment)}>ارزیابی کودک<Icon size={18} /></a></nav>
    </div>
  </header>;
}

const services = [
  { number: '۰۱', icon: 'spark', tag: 'شناخت', title: 'دنیای کودکم را بشناسم', description: 'از توانایی‌ها و علایق تا دغدغه‌های شما؛ شناخت بهتر، اولین قدم همراهی است.', href: links.discovery, color: 'peach', action: 'شروع شناخت کودک' },
  { number: '۰۲', icon: 'book', tag: 'ارزیابی', title: 'یادگیری‌اش را بهتر بفهمم', description: 'با پرسشنامهٔ ویژهٔ والدین، تصویر روشن‌تری از مهارت‌ها و نیازهای کودک بسازید.', href: links.assessment, color: 'lime', action: 'مشاهدهٔ پرسشنامه' },
  { number: '۰۳', icon: 'chat', tag: 'همراهی', title: 'با یک متخصص صحبت کنم', description: 'دغدغه‌هایتان را در میان بگذارید و برای قدم بعدیِ مسیر رشد، همراه داشته باشید.', href: links.appointment, color: 'blue', action: 'درخواست مشاوره' },
];
const specialists = [
  { name: 'عطیه حاجی‌بابایی راوندی', role: 'روانشناسی کودکان استثنایی', image: 'cc05b88cbc5d1d33.webp', color: 'peach' },
  { name: 'کیمیا کامرانی', role: 'کارشناس ارشد مددکاری اجتماعی', detail: 'بنیان‌گذار خانه کودک ترنم', image: '1ed4069016f5e061.png', color: 'lime' },
  { name: 'ونوس وطن‌خواه', role: 'متخصص اعصاب و روان', image: 'ee9da3ac8eb1ced7.webp', color: 'blue' },
];
const questions = [
  { title: 'از کدام بخش شروع کنم؟', answer: 'برای در میان گذاشتن نیازها و دغدغه‌های فرزندتان، فرم «شناخت کودکتان» نقطهٔ شروع خوبی است. اگر آمادهٔ پاسخ‌گویی به پرسش‌های کامل‌تر هستید، از بخش «ارزیابی کودک» شروع کنید.' },
  { title: 'چه پرسشنامه‌هایی در دسترس است؟', answer: 'پرسشنامهٔ ارزیابی کودک برای والدین و پرسشنامهٔ عزت نفس و ارزش شخصی در دسترس هستند. می‌توانید هر کدام را در بخش پرسشنامه‌ها انتخاب کنید.' },
  { title: 'می‌توانم پاسخ‌های مرحلهٔ قبل را ویرایش کنم؟', answer: 'بله. در پرسشنامه‌های چندمرحله‌ای، با دکمهٔ «مرحلهٔ قبل» می‌توانید پاسخ‌هایتان را مرور و ویرایش کنید. تا وقتی در همان صفحه هستید، پاسخ‌های واردشده باقی می‌مانند.' },
];

export default function Home() {
  return <div id="layout" className="zh-home">
    <a className="zh-skip" href="#home-main">رفتن به محتوای اصلی</a>
    <HomeHeader />
    <main id="home-main">
      <section className="zh-hero zh-container" aria-labelledby="hero-title">
        <div className="zh-hero-copy">
          <div className="zh-eyebrow"><span className="zh-dot" />برای شکوفاییِ دنیای کوچکشان</div>
          <h1 id="hero-title">هر کودک، یک دنیا.<br />بیایید <span>کشفش کنیم.</span></h1>
          <p className="zh-hero-description">استعدادها، سبک یادگیری و نیازهای فرزندتان را بهتر بشناسید. ما در ضربان‌یار، برای ساختن مسیر رشد او کنار شماییم.</p>
          <div className="zh-hero-actions"><ButtonLink href={links.assessment}>شروع ارزیابی کودک</ButtonLink><ButtonLink href={links.discovery} secondary>شناخت کودکم</ButtonLink></div>
          <div className="zh-hero-note"><span><Icon name="check" size={17} />قدم‌به‌قدم، با همراهی متخصصان</span><span className="zh-note-separator" /><span>به زبان ساده، برای والدین</span></div>
        </div>
        <div className="zh-hero-visual">
          <div className="zh-photo-frame"><img src={siteUrl('/assets/original/0b977e2c6d8e1ade.avif')} width="660" height="640" alt="کودکی در حال ساختن با قطعات رنگی و کشف توانایی‌هایش" fetchPriority="high" /><span className="zh-photo-label"><span className="zh-tiny-shapes"><i /><i /><i /></span>هر کودک، مسیر خودش</span></div>
          <Star className="zh-hero-star" />
          <div className="zh-photo-caption"><span className="zh-caption-icon"><Icon name="heart" size={26} /></span><p>از شناخت امروز،<br /><strong>تا شکوفایی فردا.</strong></p></div>
          <span className="zh-photo-index" aria-hidden="true">کشف · یادگیری · رشد</span>
        </div>
      </section>

      <div className="zh-focus-strip zh-container" aria-label="زمینه‌های رشد کودک">{[{ name: 'focus', text: 'توجه و تمرکز' }, { name: 'book', text: 'مهارت‌های یادگیری' }, { name: 'heart', text: 'احساس ارزشمندی' }, { name: 'leaf', text: 'رشد و خلاقیت' }].map(item => <div key={item.name}><Icon name={item.name} size={25} /><span>{item.text}</span></div>)}</div>

      <section className="zh-section zh-container" id="services" aria-labelledby="services-title">
        <div className="zh-section-heading"><div><p className="zh-eyebrow">هر قدم کوچک، مهم است</p><h2 id="services-title">از شناخت تا رشد،<br /><span>کنار شما هستیم.</span></h2></div><p className="zh-heading-description">برای هر دغدغه، یک نقطهٔ شروع.<br />مسیری را انتخاب کنید که امروز به آن نیاز دارید.</p></div>
        <div className="zh-services-grid">{services.map(service => <a key={service.number} className={`zh-service zh-tone-${service.color}`} href={siteUrl(service.href)}><div className="zh-service-top"><span className="zh-service-icon"><Icon name={service.icon} size={29} /></span><span className="zh-service-number">{service.number}</span></div><span className="zh-service-tag">{service.tag}</span><h3>{service.title}</h3><p>{service.description}</p><span className="zh-service-action">{service.action}<Icon size={20} /></span></a>)}</div>
      </section>

      <section className="zh-process" aria-labelledby="process-title"><div className="zh-container"><div className="zh-process-heading"><div><p className="zh-eyebrow">راهِ پیش رو، روشن‌تر است</p><h2 id="process-title">قدم‌به‌قدم،<br />برای شناخت بهتر فرزندتان.</h2></div><a href={siteUrl(links.assessment)} className="zh-process-link">از همین‌جا شروع کنیم<Icon size={21} /></a></div><ol className="zh-process-steps">{[
        { title: 'از کودکتان بگویید', text: 'اطلاعات اولیه و دغدغه‌هایتان را با ما در میان بگذارید.' },
        { title: 'به پرسش‌ها پاسخ دهید', text: 'پرسشنامه را مرحله‌به‌مرحله و با حوصله تکمیل کنید.' },
        { title: 'جزئیات را کامل کنید', text: 'پاسخ‌هایتان را مرور کنید و اطلاعات تکمیلی را بنویسید.' },
        { title: 'مسیر را همراه می‌شویم', text: 'کارشناسان با بررسی پاسخ‌ها، برای قدم بعدی کنارتان هستند.' },
      ].map((step, index) => <li key={step.title}><span className="zh-step-number">{['۱', '۲', '۳', '۴'][index]}</span><h3>{step.title}</h3><p>{step.text}</p></li>)}</ol></div></section>

      <section className="zh-section zh-container" id="specialists" aria-labelledby="specialists-title"><div className="zh-section-heading"><div><p className="zh-eyebrow">آدم‌های این مسیر</p><h2 id="specialists-title">تخصص، با یک<br /><span>نگاهِ مهربان.</span></h2></div><div className="zh-heading-side"><p>برای شناخت بهتر کودک و همراهی شما،<br />با تیم ضربان‌یار آشنا شوید.</p><a href={siteUrl('/about-us/')} className="zh-text-link">بیشتر دربارهٔ ما<Icon size={18} /></a></div></div><div className="zh-people-grid">{specialists.map(person => <article key={person.name} className="zh-person"><div className={`zh-person-photo zh-tone-${person.color}`}><img src={siteUrl(`/assets/original/${person.image}`)} alt={person.name} width="400" height="410" loading="lazy" /><span className="zh-person-mark"><Icon name="spark" size={23} /></span></div><h3>{person.name}</h3><p>{person.role}</p>{person.detail && <span className="zh-person-detail">{person.detail}</span>}</article>)}</div></section>

      <section className="zh-assessments-wrap" aria-labelledby="assessments-title"><div className="zh-container zh-section"><div className="zh-section-heading"><div><p className="zh-eyebrow">کمی مکث، کمی شناخت</p><h2 id="assessments-title">یک پرسشنامه،<br /><span>یک نگاه تازه.</span></h2></div><a href={siteUrl('/assessment-forms/kids/')} className="zh-text-link">همهٔ پرسشنامه‌ها<Icon size={18} /></a></div><div className="zh-assessment-grid">
        <a className="zh-assessment" href={siteUrl(links.assessment)}><div className="zh-assessment-copy"><span className="zh-tag zh-tag--peach">ویژهٔ والدین</span><h3>پرسشنامهٔ ارزیابی کودک</h3><p>برای شناخت دقیق‌ترِ دنیای یادگیری فرزندتان.</p><span className="zh-text-link">شروع پرسشنامه<Icon size={18} /></span></div><img src={siteUrl('/assets/original/6c02cf5da780a6a9.webp')} width="200" height="240" alt="تصویر مادر و کودک" loading="lazy" /></a>
        <a className="zh-assessment" href={siteUrl(links.selfEsteem)}><div className="zh-assessment-copy"><span className="zh-tag zh-tag--lime">شناخت احساسات</span><h3>عزت نفس و ارزش شخصی</h3><p>نگاهی به احساس ارزشمندی و رضایت از خود.</p><span className="zh-text-link">مشاهدهٔ پرسشنامه<Icon size={18} /></span></div><img src={siteUrl('/assets/original/15ab623579a0179b.webp')} width="200" height="240" alt="تصویر شاد کودکان" loading="lazy" /></a>
      </div></div></section>

      <section className="zh-section zh-container zh-faq" id="questions" aria-labelledby="questions-title"><div className="zh-faq-heading"><p className="zh-eyebrow">قبل از شروع</p><h2 id="questions-title">شاید سؤال<br /><span>شما هم باشد.</span></h2><p>یک شروع آگاهانه،<br />با چند پاسخ روشن.</p><Icon name="chat" size={48} /></div><div className="zh-faq-list">{questions.map((question, index) => <details key={question.title} name="home-questions" open={index === 0}><summary>{question.title}<Icon name="plus" size={22} /></summary><p>{question.answer}</p></details>)}</div></section>

      <section className="zh-container zh-start-wrap"><div className="zh-start"><Star className="zh-start-star" /><div><p className="zh-eyebrow">رویاهای کوچک، آینده‌های بزرگ</p><h2>یک قدم کوچکِ امروز،<br />یک دنیای تازه برای فردا.</h2></div><ButtonLink href={links.discovery}>کودکم را بهتر بشناسم</ButtonLink></div></section>
    </main>
    <footer className="elementor zh-footer"><div className="zh-container"><div className="zh-footer-main"><div className="zh-footer-about"><a className="zh-brand" href={siteUrl('/')}><img src={siteUrl('/assets/original/5d550ea6ceb8eb7c.avif')} width="174" height="37" alt="ضربان‌یار" loading="lazy" /></a><p>در هر ضربان، کنار فرزندان شما.<br />همراهی برای شناخت، یادگیری و رشد.</p></div><nav aria-label="صفحه‌های ضربان‌یار"><span>با ضربان‌یار</span><a href={siteUrl('/about-us/')}>درباره ما</a><a href={siteUrl(links.discovery)}>شناخت کودکتان</a><a href={siteUrl(links.appointment)}>رزرو مشاوره</a></nav><nav aria-label="ارزیابی‌ها"><span>یک قدم برای شناخت</span><a href={siteUrl(links.assessment)}>ارزیابی کودک</a><a href={siteUrl(links.selfEsteem)}>عزت نفس و ارزش شخصی</a><a href={siteUrl('/assessment-forms/kids/')}>همهٔ پرسشنامه‌ها</a></nav><div className="zh-footer-sign"><Icon name="heart" size={27} /><span>برای دنیای<br /><strong>قشنگِ کودکی.</strong></span></div></div><div className="zh-footer-bottom"><span>© ۲۰۲۶ ضربان‌یار. همهٔ حقوق محفوظ است.</span><span>با توجه، برای رشد <span className="zh-footer-dot" /></span></div></div></footer>
  </div>;
}
