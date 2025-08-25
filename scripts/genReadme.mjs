import fs from 'node:fs';
import path from 'node:path';

const root = process.cwd();
const meta = JSON.parse(fs.readFileSync(path.join(root, 'docs/meta.json'), 'utf-8'));
let tpl = fs.readFileSync(path.join(root, 'scripts/README.template.md'), 'utf-8');

// {{a.b.c}} 같은 단일 키 치환
function interpolate(template, data) {
  return template.replace(/\{\{([^}]+)\}\}/g, (_, key) => {
    if (key.includes('#') || key.includes('/')) return `{{${key}}}`; // 블록 토큰은 일단 보류
    const parts = key.split('.');
    let v = data;
    for (const p of parts) v = v?.[p];
    return v ?? '';
  });
}

// 블록 반복: componentsByCategory
tpl = tpl.replace(
  /\{\{#componentsByCategory\}\}([\s\S]*?)\{\{\/componentsByCategory\}\}/g,
  (_, inner) =>
    meta.componentsByCategory
      .map((c) =>
        inner
          .replace(/\{\{category\}\}/g, c.category)
          .replace(/\{\{items\.join\(', '\)\}\}/g, c.items.join(', ')),
      )
      .join('\n'),
);

// 블록 반복: libraries
tpl = tpl.replace(/\{\{#libraries\}\}([\s\S]*?)\{\{\/libraries\}\}/g, (_, inner) =>
  meta.libraries
    .map((l) =>
      inner
        .replace(/\{\{name\}\}/g, l.name)
        .replace(/\{\{licenseName\}\}/g, l.licenseName)
        .replace(/\{\{author\}\}/g, l.author)
        .replace(/\{\{desc\}\}/g, l.desc)
        .replace(/\{\{github\}\}/g, l.github)
        .replace(/\{\{licenseUrl\}\}/g, l.licenseUrl),
    )
    .join('\n'),
);

// 남은 단일 토큰 치환
const out = interpolate(tpl, meta);
fs.writeFileSync(path.join(root, 'README.md'), out, 'utf-8');
console.log('✅ README.md generated from docs/meta.json');