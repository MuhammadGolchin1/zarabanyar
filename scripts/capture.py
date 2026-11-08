"""Capture public reference documents and their static dependencies, without executing site code."""
from concurrent.futures import ThreadPoolExecutor, as_completed
from pathlib import Path
from urllib.parse import urljoin, urlsplit, unquote
from urllib.request import Request, urlopen
import hashlib, json, re, time
import xml.etree.ElementTree as ET

ROOT = Path(__file__).resolve().parent.parent
REF = ROOT / 'reference'
ASSETS = ROOT / 'public' / 'assets' / 'original'
ASSETS.mkdir(parents=True, exist_ok=True)
BASE = 'https://zarabanyar.com'

def fetch(url):
    for attempt in range(3):
        try:
            with urlopen(Request(url, headers={'User-Agent': 'Mozilla/5.0'}), timeout=45) as res:
                return res.read(), res.headers.get('Content-Type', ''), res.geturl()
        except Exception:
            if attempt == 2: raise
            time.sleep(1)

def page_urls():
    urls = {BASE + '/', BASE + '/assessment-forms/kids/arzyabi/', BASE + '/assessment-forms/kids/'}
    for name in ('pages.xml', 'forms.xml'):
        tree = ET.fromstring((REF / name).read_bytes())
        urls.update(el.text for el in tree.iter() if el.tag.endswith('}loc'))
    return sorted(urls)

def capture_pages():
    urls = page_urls()
    records = []
    def one(url):
        data, content_type, final = fetch(url)
        filename = hashlib.sha1(url.encode()).hexdigest()[:12] + '.html'
        (REF / filename).write_bytes(data)
        return {'url': url, 'path': unquote(urlsplit(url).path), 'file': filename, 'final': final, 'bytes': len(data)}
    with ThreadPoolExecutor(max_workers=6) as pool:
        for f in as_completed([pool.submit(one, url) for url in urls]):
            try:
                record = f.result()
                records.append(record)
                print('PAGE', record['path'], record['bytes'], flush=True)
            except Exception as e: print('FAILED PAGE', str(e), flush=True)
    (REF / 'inventory.json').write_text(json.dumps(records, ensure_ascii=False, indent=2), encoding='utf-8')

def references(text, base):
    found = set()
    for match in re.finditer(r'''(?:src|href|data-src|data-lazy-src|poster)\s*=\s*["']([^"']+)|url\(\s*["']?([^\)"']+)|["'](https?[^"'\s<>]+\.(?:webp|avif|png|jpg|jpeg|svg|woff2?|ttf)(?:\?[^"'\s<>]*)?)["']''', text, re.I):
        value = next(v for v in match.groups() if v)
        value = value.replace('&amp;', '&').replace('\\/', '/')
        url = urljoin(base, value)
        parsed = urlsplit(url)
        if parsed.scheme in ('http','https') and re.search(r'\.(?:css|webp|avif|png|jpg|jpeg|gif|svg|ico|woff2?|ttf|eot|mp4|webm)$', parsed.path, re.I):
            found.add(url)
    for srcset in re.findall(r'srcset=["\']([^"\']+)', text):
        for value in srcset.split(','):
            url = urljoin(base, value.strip().split(' ')[0])
            if url.startswith('http'): found.add(url)
    return found

def capture_assets():
    inventory = json.loads((REF / 'inventory.json').read_text(encoding='utf-8'))
    pending = set()
    for page in inventory:
        pending.update(references((REF / page['file']).read_text(encoding='utf-8'), page['url']))
    mapping = json.loads((REF / 'asset-map.json').read_text()) if (REF / 'asset-map.json').exists() else {}
    failed = []
    done = set(mapping)
    def one(url):
        suffix = Path(urlsplit(url).path).suffix
        name = hashlib.sha1(url.encode()).hexdigest()[:16] + suffix
        target = ASSETS / name
        if target.exists(): data = target.read_bytes()
        else:
            data, _, _ = fetch(url)
            target.write_bytes(data)
        children = references(data.decode('utf-8', errors='replace'), url) if suffix == '.css' else set()
        return url, '/assets/original/' + name, children
    while pending:
        batch = pending - done
        if not batch: break
        done.update(batch)
        pending = set()
        with ThreadPoolExecutor(max_workers=10) as pool:
            futures = {pool.submit(one, url): url for url in batch}
            for f in as_completed(futures):
                try:
                    url, local, children = f.result()
                    mapping[url] = local
                    pending.update(children)
                except Exception as e:
                    failed.append({'url': futures[f], 'error': str(e)})
        print('ASSETS', len(mapping), 'FAILED', len(failed), 'DISCOVERED', len(pending - done), flush=True)
        (REF / 'asset-map.json').write_text(json.dumps(mapping, ensure_ascii=False, indent=2), encoding='utf-8')
    (REF / 'failed-assets.json').write_text(json.dumps(failed, ensure_ascii=False, indent=2), encoding='utf-8')

if __name__ == '__main__':
    import sys
    if '--assets' in sys.argv: capture_assets()
    else: capture_pages()
