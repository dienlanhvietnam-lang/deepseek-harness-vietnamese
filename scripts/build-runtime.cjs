const fs = require('fs');
const path = require('path');
const root = path.resolve(__dirname, '..');
const dictionaries = {
  ...JSON.parse(fs.readFileSync(path.join(root, 'translations/vi.json'), 'utf8')),
  betterSidebar: JSON.parse(fs.readFileSync(path.join(root, 'translations/extensions/betterSidebar.vi.json'), 'utf8')),
  rewind: JSON.parse(fs.readFileSync(path.join(root, 'translations/extensions/rewind.vi.json'), 'utf8')),
};

const client = lines.join('\n');
fs.mkdirSync(path.join(root, 'lib'), { recursive: true });
fs.writeFileSync(path.join(root, 'lib/client.js'), client, 'utf8');
console.log('generated DSH ModuleLoader lib/client.js with ' + Object.keys(dictionaries).length + ' namespaces');
