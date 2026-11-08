"""Turn the captured public page DOM into editable JSX; no WordPress runtime is shipped."""
from pathlib import Path
from urllib.parse import urljoin, urlsplit, unquote
from dom import Document, Node, VOID
import json, re

ROOT = Path(__file__).resolve().parent.parent
REF = ROOT / 'reference'
SRC = ROOT / 'src'
(SRC / 'pages').mkdir(parents=True, exist_ok=True)
(SRC / 'components').mkdir(exist_ok=True)
(ROOT / 'public/styles').mkdir(parents=True, exist_ok=True)
mapping = json.loads((REF / 'asset-map.json').read_text(encoding='utf-8'))
failed = {a['url'] for a in json.loads((REF / 'failed-assets.json').read_text(encoding='utf-8'))}
records = json.loads((REF / 'inventory.json').read_text(encoding='utf-8'))
BASE = 'https://zarabanyar.com/'

def js(value): return json.dumps(value, ensure_ascii=False)

def asset(value, base=BASE):
    url = urljoin(base, value)
    if url in mapping: return mapping[url]
    # Some CSS references omit the cache query used by the corresponding link.
    plain = url.split('?')[0]
    for original, local in mapping.items():
        if original.split('?')[0] == plain: return local
    if url in failed: return 'data:,'
    return value

def css(text, base=BASE):
    def repl(match):
        value = match.group(1).strip(' \t\n\r\'"')
        if value.startswith('data:') or value.startswith('#'): return match.group(0)
        return 'url(' + js(asset(value, base)) + ')'
    text = re.sub(r'url\(([^)]+)\)', repl, text)
    return re.sub(r'/\*# sourceURL=.*?\*/', '', text)

def local_link(value):
    parsed = urlsplit(urljoin(BASE, value))
    if parsed.hostname in ('zarabanyar.com','www.zarabanyar.com'):
        if parsed.path.startswith('/wp-content/'): return asset(value)
        return unquote(parsed.path or '/') + ('?' + parsed.query if parsed.query else '') + ('#' + parsed.fragment if parsed.fragment else '')
    return value

ATTRS = {'class':'className','for':'htmlFor','tabindex':'tabIndex','srcset':'srcSet','crossorigin':'crossOrigin',
         'autocomplete':'autoComplete','autofocus':'autoFocus','inputmode':'inputMode','maxlength':'maxLength',
         'minlength':'minLength','readonly':'readOnly','colspan':'colSpan','rowspan':'rowSpan','frameborder':'frameBorder',
         'allowfullscreen':'allowFullScreen','accept-charset':'acceptCharset','enctype':'encType','novalidate':'noValidate',
         'viewbox':'viewBox','preserveaspectratio':'preserveAspectRatio','stroke-width':'strokeWidth',
         'stroke-linecap':'strokeLinecap','stroke-linejoin':'strokeLinejoin','fill-rule':'fillRule','clip-rule':'clipRule',
         'xmlns:xlink':'xmlnsXlink','xlink:href':'xlinkHref','datetime':'dateTime','contenteditable':'contentEditable',
         'http-equiv':'httpEquiv','fetchpriority':'fetchPriority','usemap':'useMap'}
BOOL = set('disabled required checked selected multiple readonly autofocus controls loop muted playsinline allowfullscreen hidden open novalidate'.split())

def style_object(text):
    result = {}
    for part in text.split(';'):
        if ':' not in part: continue
        key, value = part.split(':',1)
        key, value = key.strip(), value.strip().replace(' !important','')
        if not key or not value: continue
        if not key.startswith('--'):
            key = re.sub(r'-([a-z])', lambda m:m.group(1).upper(), key)
            if key.startswith('Ms'): key = 'ms' + key[2:]
        result[key] = css(value)
    return result

def props(node):
    result = {}
    attrs = dict(node.attrs)
    if node.tag == 'img':
        if attrs.get('data-src'): attrs['src'] = attrs['data-src']
        if attrs.get('data-lazy-src'): attrs['src'] = attrs['data-lazy-src']
        attrs.setdefault('alt','')
    for key, value in attrs.items():
        if key.startswith('on') or key in ['data-ajax','data-zfb-consultation-config','data-settings','data-arrows','data-element_type','data-e-type','data-widget_type','data-first-step-popup','data-src','data-lazy-src','data-srcset']: continue
        if node.tag == 'option' and key == 'selected': continue
        name = ATTRS.get(key, key)
        if key == 'style':
            result[name] = style_object(value)
            continue
        if key == 'class':
            value = ' '.join(c for c in value.split() if c not in ['elementor-invisible','lazyload','cz_lazyload','cz_img_lazy','current-menu-item','current_page_item','current_menu','elementor-item-active'])
            if node.has_class('cz_grid'): value += ' cz_grid_no_loading'
            if node.has_class('elementor-post__thumbnail'): value += ' elementor-fit-height'
        if key in ['src','poster']: value = asset(value)
        if key in ['href','action']: value = local_link(value)
        if key == 'srcset':
            value = ', '.join(' '.join([asset(s.strip().split()[0])] + s.strip().split()[1:]) for s in value.split(',') if s.strip())
        if key in BOOL: value = True
        if key == 'value' and node.tag in ['input','textarea','select'] and attrs.get('type') not in ['radio','checkbox','hidden']: name = 'defaultValue'
        if key == 'checked': name = 'defaultChecked'
        if key.startswith('data-') and 'nonce' in key: continue
        result[name] = '' if value is None else value
    return result

COMPONENTS = 'HeroSlider, ReferenceForm, FormStage, FormProgress, FormButton, Accordion, AccordionTitle, AccordionPanel, BookingPicker, UploadField, FirstStepNotice, SearchArchive, ImageLightbox'

def render(node, depth=0, shared=True):
    indent = '  ' * depth
    if isinstance(node, str):
        text = re.sub(r'\s+', ' ', node)
        if not text.strip(): return ''
        return indent + '{' + js(text) + '}\n'
    if node.tag in ['style','script','template','link','meta','noscript']: return ''
    if node.tag=='input' and node.attrs.get('type')=='hidden': return ''
    if shared and node.tag=='header' and node.attrs.get('data-elementor-id')=='4055': return indent + '<Header />\n'
    if shared and node.tag=='footer' and node.attrs.get('data-elementor-id')=='4109': return indent + '<Footer />\n'
    tag = node.tag
    attributes = props(node)
    if node.tag=='i' and (node.has_class('icon_dropdown_menu') or node.has_class('icon_mobile_dropdown_menu')):
        tag='button'
        attributes.update({'type':'button','aria-label':'باز کردن منو','aria-expanded':'false'})
    if node.has_class('digits-login-modal'):
        tag='button'
        attributes.update({'type':'button'})
        attributes.pop('href',None)
    if node.has_class('elementor-slides-wrapper'): tag='HeroSlider'
    if node.has_class('zfb-form'):
        tag='ReferenceForm'
        attributes['formId']=node.parent.attrs.get('data-form-id','unknown')
        attributes['totalStages']=len([n for n in node.walk() if n.has_class('zfb-stage')])
        for key in ['method','action','encType']: attributes.pop(key,None)
    if node.has_class('zfb-stage'): tag='FormStage'
    if node.has_class('zfb-form-progress'): return indent + '<FormProgress />\n'
    if node.has_class('zfb-btn-prev') or node.has_class('zfb-btn-next'):
        tag='FormButton'
        attributes['direction']='prev' if node.has_class('zfb-btn-prev') else 'next'
        attributes.pop('disabled',None)
    if node.has_class('cz_acc'): tag='Accordion'
    if node.has_class('cz_acc_child'):tag='AccordionTitle'
    if node.has_class('cz_acc_child_content'):tag='AccordionPanel'
    if node.has_class('zfb-first-step-overlay'):
        content=node.find(lambda n:n.has_class('zfb-first-step-content'))
        return indent + '<FirstStepNotice>\n' + ''.join(render(c,depth+1,shared) for c in (content.children if content else [])) + indent + '</FirstStepNotice>\n'
    if node.has_class('zfb-appointment-picker'):
        return indent + '<BookingPicker />\n'
    if node.has_class('zfb-archive-toolbar'): tag='SearchArchive'
    # Replace complete upload widget with a React upload controller, preserving its exact labels.
    file_input=node.find(lambda n:n.tag=='input' and n.attrs.get('type')=='file') if ('upload' in node.attrs.get('class','') or 'gallery-container' in node.attrs.get('class','')) else None
    if file_input and (node.has_class('zfb-gallery-upload-container') or node.has_class('zfb-gallery-container') or node.has_class('zfb-file-upload-container') or node.has_class('zfb-file-container')):
        return indent + '<UploadField {...' + js(props(file_input)) + '} />\n'
    if node.tag=='a' and node.attrs.get('href') and re.search(r'\.(?:webp|png|avif|jpe?g)$',urlsplit(node.attrs['href']).path,re.I): tag='ImageLightbox'
    if node.tag=='textarea' and node.children:
        attributes['defaultValue']=node.text()
        children=''
    else: children=''.join(render(child,depth+1,shared) for child in node.children)
    needs_base = any(key in attributes for key in ['href','src','srcSet','poster','action']) or '/assets/' in str(attributes.get('style',''))
    attr = (' {...withBaseProps(' + js(attributes) + ')}' if needs_base else ' {...' + js(attributes) + '}') if attributes else ''
    if tag in VOID or (tag[0].isupper() and not children and tag not in ['ReferenceForm']): return indent + '<' + tag + attr + ' />\n'
    return indent+'<'+tag+attr+'>\n'+children+indent+'</'+tag+'>\n'

names={880:'Home',881:'About',1990:'Appointment',4276:'KnowYourChild',14:'Faq',20:'Blog',28:'Shop',29:'Cart',30:'Checkout',31:'Account',1224:'Wishlist',2056:'Compare',4140:'Kids',4142:'AssessmentRedirect'}
manifest=[]
shared_done=False
for record in records:
    doc=Document((REF/record['file']).read_text(encoding='utf-8')).root
    body=doc.find(lambda n:n.tag=='body')
    layout=doc.find(lambda n:n.attrs.get('id')=='layout')
    if not layout: print('NO LAYOUT',record['path']);continue
    page_id=re.search(r'\bpage-id-(\d+)',body.attrs.get('class',''))
    form_id=re.search(r'\bpostid-(\d+)',body.attrs.get('class',''))
    name=names.get(int(page_id.group(1))) if page_id else None
    if record['path']=='/blog/': name='Blog'
    if not name:
        container=doc.find(lambda n:n.has_class('zfb-form-container'))
        fid=container.attrs.get('data-form-id') if container else None
        name={'4018':'ParentAssessment','4017':'SelfEsteem'}.get(fid,'AssessmentArchive')
    styles=[]
    inline_count=0
    for n in doc.walk():
        if n.tag=='link' and n.attrs.get('rel')=='stylesheet':
            url=n.attrs.get('href','')
            local=asset(url)
            if local.startswith('/assets/'):
                media=n.attrs.get('media','all')
                styles.append('@import url('+js(local)+')'+(' '+media if media!='all' else '')+';')
        elif n.tag=='style':
            inline_count+=1
            inline_name=f'{name}-inline-{inline_count}.css'
            (ROOT/'public/styles'/inline_name).write_text(css(n.text()),encoding='utf-8')
            styles.append('@import url('+js('/styles/'+inline_name)+');')
    (ROOT/'public/styles'/f'{name}.css').write_text('\n'.join(styles),encoding='utf-8')
    if not shared_done:
        for tag,label in [('header','Header'),('footer','Footer')]:
            n=layout.find(lambda n:n.tag==tag)
            hook=''
            imports='import { withBaseProps, sitePath } from "../lib/paths";\n'
            if label=='Header':
                imports+='import { useLayoutEffect } from "react";\n'
                hook='''  useLayoutEffect(() => {
    const clean = value => decodeURIComponent(sitePath(value)).replace(/\\/+$/, '') || '/';
    document.querySelectorAll('header.elementor a[href]').forEach(anchor => {
      const active = clean(new URL(anchor.href).pathname) === clean(window.location.pathname) && !anchor.search;
      anchor.classList.toggle('elementor-item-active', active);
      if (active) anchor.setAttribute('aria-current', 'page');
      else anchor.removeAttribute('aria-current');
    });
  }, []);
'''
            code=imports+'// Shared '+tag+' faithfully preserved from the public reference.\nexport default function '+label+'() {\n'+hook+'  return (\n'+render(n,2,False)+'  );\n}\n'
            (SRC/'components'/f'{label}.jsx').write_text(code,encoding='utf-8')
        shared_done=True
    code='import Header from "../components/Header";\nimport Footer from "../components/Footer";\nimport { withBaseProps } from "../lib/paths";\nimport { '+COMPONENTS+' } from "../components/Interactions";\n\n'
    code+='export default function '+name+'() {\n  return (\n'+render(layout,2)+'  );\n}\n'
    (SRC/'pages'/f'{name}.jsx').write_text(code,encoding='utf-8')
    title=doc.find(lambda n:n.tag=='title')
    manifest.append({'name':name,'path':record['path'],'title':title.text() if title else 'ضربان‌یار','bodyClass':body.attrs.get('class',''),'stylesheet':'/styles/'+name+'.css','source':record['url']})
    print('GENERATED',name,record['path'],len(code))
(SRC/'routes.json').write_text(js(manifest),encoding='utf-8')
# Localize dependency URLs within the downloaded CSS too, so they are usable independently.
for url,local in mapping.items():
    if urlsplit(url).path.endswith('.css'):
        file=ROOT/'public'/local.lstrip('/')
        file.write_text(css(file.read_text(encoding='utf-8',errors='replace'),url),encoding='utf-8')
print('TOTAL',len(manifest),'routes;',len(mapping),'static files')
