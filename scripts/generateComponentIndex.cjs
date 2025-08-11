// scripts/generateComponentIndex.js
const fs = require('fs');
const path = require('path');

const COMPONENTS_DIR = path.resolve(__dirname, '../src/components');
const INDEX_FILE = path.join(COMPONENTS_DIR, 'index.ts');

const ALLOW_EXTS = ['.tsx', '.ts', '.jsx', '.js'];
const INDEX_CANDIDATES = ['index.tsx', 'index.ts', 'index.jsx', 'index.js'];
const IGNORE_PATTERNS = [/\.stories\./i, /\.test\./i, /\.spec\./i, /\.d\.ts$/i];
const IGNORE_EXTS = ['.scss', '.css', '.svg'];

function isIgnoredFile(name) {
  if (IGNORE_EXTS.includes(path.extname(name))) return true;
  return IGNORE_PATTERNS.some((re) => re.test(name));
}

function findIndexInDir(dir) {
  for (const f of INDEX_CANDIDATES) {
    const p = path.join(dir, f);
    if (fs.existsSync(p)) return f;
  }
  return null;
}

function pickBestFile(files) {
  // 우선순위: tsx > ts > jsx > js
  const order = { '.tsx': 1, '.ts': 2, '.jsx': 3, '.js': 4 };
  return files
    .filter((f) => ALLOW_EXTS.includes(path.extname(f)))
    .sort((a, b) => order[path.extname(a)] - order[path.extname(b)])[0];
}

function collectExports(dir) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  const lines = [];

  for (const entry of entries) {
    const full = path.join(dir, entry.name);

    // 1) 디렉토리: index.* 있으면 폴더 기준으로 export
    if (entry.isDirectory()) {
      const idx = findIndexInDir(full);
      if (idx) {
        lines.push(`export { default as ${entry.name} } from './${entry.name}';`);
        continue;
      }
      // index 없는 폴더는 하위 파일 훑어서 대표 파일 선택
      const files = fs.readdirSync(full).filter((f) => !isIgnoredFile(f));
      const best = pickBestFile(files);
      if (best) {
        lines.push(`export { default as ${entry.name} } from './${entry.name}/${path.basename(best, path.extname(best))}';`);
      }
      continue;
    }

    // 2) 파일: 허용 확장자 + 인덱스/무시 파일 제외
    if (entry.isFile()) {
      if (isIgnoredFile(entry.name)) continue;
      const ext = path.extname(entry.name);
      if (!ALLOW_EXTS.includes(ext)) continue;
      if (INDEX_CANDIDATES.includes(entry.name.toLowerCase())) continue; // 자기 자신

      const base = path.basename(entry.name, ext);

      // 컴포넌트 파일만 export (대문자로 시작하는 파일명만)
      if (!/^[A-Z]/.test(base)) continue;

      lines.push(`export { default as ${base} } from './${base}';`);
    }
  }
  return lines.sort(); // 알파벳 정렬
}

function run() {
  if (!fs.existsSync(COMPONENTS_DIR)) {
    console.error('components 디렉토리를 찾을 수 없습니다:', COMPONENTS_DIR);
    process.exit(1);
  }
  const exports = collectExports(COMPONENTS_DIR);
  const banner = `// ⚠️ 자동 생성 파일입니다. 직접 수정하지 마세요.
// 생성 스크립트: scripts/generateComponentIndex.js

`;
  fs.writeFileSync(INDEX_FILE, banner + exports.join('\n') + '\n', 'utf8');
  console.log(`✅ Generated ${path.relative(process.cwd(), INDEX_FILE)} with ${exports.length} exports`);
}

run();
