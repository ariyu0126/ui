const fs = require('fs');
const path = require('path');

const COMPONENTS_DIR = path.resolve(__dirname, '../src/components');
const INDEX_FILE = path.join(COMPONENTS_DIR, 'Index.jsx');

const files = fs
  .readdirSync(COMPONENTS_DIR)
  .filter((file) => {
    const ext = path.extname(file);
    const isComponent = ['.js', '.jsx', '.ts', '.tsx'].includes(ext);
    const isNotIndex = !file.startsWith('Index.');
    return isComponent && isNotIndex;
  });

const exportLines = files.map((file) => {
  const name = path.basename(file, path.extname(file));
  return `export { default as ${name} } from './${name}';`;
});

fs.writeFileSync(INDEX_FILE, exportLines.join('\n') + '\n');