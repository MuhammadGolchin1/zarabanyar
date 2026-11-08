from pathlib import Path
from dom import Document, Node
import json, sys
root = Path(__file__).resolve().parent.parent
records = json.loads((root / 'reference/inventory.json').read_text(encoding='utf-8'))
for record in records:
    if len(sys.argv)>1 and not any(s in record['path'] for s in sys.argv[1:]): continue
    doc = Document((root / 'reference' / record['file']).read_text(encoding='utf-8')).root
    print('\nPAGE',record['path'])
    for node in doc.walk():
        if node.tag in ['h1','h2','h3','input','select','textarea','form'] and not node.find(lambda n: n.has_class('digits_form_index_section')):
            print(node.tag, str(node.attrs)[:400], node.text().strip()[:250] if node.tag.startswith('h') else '')
        if node.attrs.get('id')=='page_content':
            print('CONTENT',node.text().strip()[:1600])
