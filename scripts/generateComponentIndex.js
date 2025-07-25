const fs = require('fs');
const path = require('path');

const COMPONENTS_DIR = path.resolve(__dirname, '../src/components');
const INDEX_FILE = path.join(COMPONENTS_DIR, 'Index.jsx');

const entries = fs.readdirSync(COMPONENTS_DIR, { withFileTypes: true });

const exportLines = entries.flatMap((entry) => {
  const fullPath = path.join(COMPONENTS_DIR, entry.name);

  if (entry.isFile()) {
    const ext = path.extname(entry.name);
    const isComponent = ['.js', '.jsx', '.ts', '.tsx'].includes(ext);
    const isNotIndex = !entry.name.startsWith('Index.');
    if (isComponent && isNotIndex) {
      const name = path.basename(entry.name, ext);
      return `export { default as ${name} } from './${name}';`;
    }
  }

  if (entry.isDirectory()) {
    const indexFile = ['index.jsx', 'index.js', 'index.tsx', 'index.ts'].find((f) =>
      fs.existsSync(path.join(fullPath, f))
    );
    if (indexFile) {
      return `export { default as ${entry.name} } from './${entry.name}';`;
    }
  }

  return [];
});

fs.writeFileSync(INDEX_FILE, exportLines.join('\n') + '\n');
