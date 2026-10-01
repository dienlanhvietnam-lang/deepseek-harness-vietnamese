const fs = require('fs');
const path = require('path');
const root = path.resolve(__dirname, '..');
const dictionaries = {
  ...JSON.parse(fs.readFileSync(path.join(root, 'translations/vi.json'), 'utf8')),
  betterSidebar: JSON.parse(fs.readFileSync(path.join(root, 'translations/extensions/betterSidebar.vi.json'), 'utf8')),
  rewind: JSON.parse(fs.readFileSync(path.join(root, 'translations/extensions/rewind.vi.json'), 'utf8')),
};
const lines = [
  '// Generated from translations/vi.json. Do not edit lib/client.js by hand.',
  'window.__ModuleLoader__.load({',
  '  id: "dsh-vietnamese-language-pack",',
  '  factory: (require) => {',
  '    var module = { exports: {} };',
  '    var exports = module.exports;',
  '    const inject = ["locale"];',
  '',
  '    const dictionaries = ' + JSON.stringify(dictionaries, null, 2) + ';',
  '',
  '    function apply(ctx) {',
  '      ctx.effect(',
  '        () => ctx.locale.addLanguage({ id: "vi", label: "Tiếng Việt", fallback: "en" }),',
  '        "dsh-vietnamese-language-pack: language",',
  '      );',
  '      for (const [namespace, dictionary] of Object.entries(dictionaries)) {',
  '        ctx.effect(',
  '          () => ctx.locale.register(namespace, "vi", dictionary),',
  '          "dsh-vietnamese-language-pack: " + namespace,',
  '        );',
  '      }',
  '    }',
  '',
  '    exports.apply = apply;',
  '    exports.inject = inject;',
  '    return module.exports;',
  '  },',
  '});',
  '',
];
const client = lines.join('\n');
fs.mkdirSync(path.join(root, 'lib'), { recursive: true });
fs.writeFileSync(path.join(root, 'lib/client.js'), client, 'utf8');
console.log('generated DSH ModuleLoader lib/client.js with ' + Object.keys(dictionaries).length + ' namespaces');
