from dom import Document, Node
from pathlib import Path
import json
root=Path(__file__).resolve().parent.parent
records=json.loads((root/'reference/inventory.json').read_text(encoding='utf-8'))
for r in records:
 if r['path'] not in ['/رزور-نوبت-مشاوره/','/faq/','/forms/پرسشنامه-ارزیابی-کودکان-ویژه-والدین-2/','/forms/اندازه-گیری-عزت-نفس-کلی-و-ارزش-شخصی/']:continue
 d=Document((root/'reference'/r['file']).read_text(encoding='utf-8')).root
 print('\nPAGE',r['path'])
 for n in d.walk():
  c=n.attrs.get('class','')
  if n.tag=='button' or ('zfb-' in c and any(k in c for k in ['stage','progress','booking','date','time','step','popup'])) or 'cz_acc' in c:
   print(n.tag,str(n.attrs)[:650], ' '.join(n.text().split())[:100])
