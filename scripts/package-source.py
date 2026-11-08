"""Package the editable React project without dependencies, build output or QA screenshots."""
from pathlib import Path
from zipfile import ZipFile, ZIP_DEFLATED

root = Path(__file__).resolve().parent.parent
target = root / 'artifacts' / 'zarabanyar-react-source.zip'
target.parent.mkdir(exist_ok=True)
files = []
for name in ['src', 'public', 'scripts', 'tests', 'reference', '.github']:
    for path in (root / name).rglob('*'):
        if not path.is_file() or '__pycache__' in path.parts or path.suffix == '.pyc':
            continue
        if name == 'reference' and ('screenshots' in path.parts or path.name in ['browser-home.html', 'form-script.js', 'consultation-picker.js']):
            continue
        files.append(path)
for name in ['package.json', 'package-lock.json', 'vite.config.js', 'index.html', 'README.md', '.env.example', '.gitignore']:
    files.append(root / name)
with ZipFile(target, 'w', ZIP_DEFLATED, compresslevel=6) as archive:
    for path in sorted(files):
        archive.write(path, 'zarabanyar-react/' + path.relative_to(root).as_posix())
with ZipFile(target) as archive:
    assert archive.testzip() is None, 'Archive validation failed'
print(f'Packaged {len(files)} files: {target} ({target.stat().st_size / 1024 / 1024:.2f} MB)')
