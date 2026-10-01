const fs=require('fs');
const path=require('path');
const root=path.resolve(__dirname,'..');
const pkg=JSON.parse(fs.readFileSync(path.join(root,'package.json'),'utf8'));
const viBase=JSON.parse(fs.readFileSync(path.join(root,'translations/vi.json'),'utf8'));
const vi={
 ...viBase,
 betterSidebar:JSON.parse(fs.readFileSync(path.join(root,'translations/extensions/betterSidebar.vi.json'),'utf8')),
 rewind:JSON.parse(fs.readFileSync(path.join(root,'translations/extensions/rewind.vi.json'),'utf8')),
};
const enBase=JSON.parse(fs.readFileSync(path.join(root,'translations/source-en.json'),'utf8'));
const en={
 ...enBase,
 betterSidebar:JSON.parse(fs.readFileSync(path.join(root,'translations/extensions/betterSidebar.en.json'),'utf8')),
 rewind:JSON.parse(fs.readFileSync(path.join(root,'translations/extensions/rewind.en.json'),'utf8')),
};
const meta=JSON.parse(fs.readFileSync(path.join(root,'translations/meta.json'),'utf8'));
const patch=fs.readFileSync(path.join(root,'cordis.patch.yml'),'utf8');
const client=fs.readFileSync(path.join(root,'lib/client.js'),'utf8');
const errors=[];
function ph(s){return [...String(s).matchAll(/\{\{[^{}]+\}\}|\{[^{}]+\}/g)].map(m=>m[0])}
if(pkg.name!=='dsh-vietnamese-language-pack') errors.push('package name');
if(pkg.dsh?.bundle?.patch!=='./cordis.patch.yml') errors.push('dsh bundle patch');
if(!patch.includes('name: dsh-vietnamese-language-pack')) errors.push('cordis package ref');
if(!client.includes('window.__ModuleLoader__.load({')) errors.push('module loader wrapper');
if(/^\s*export\s/m.test(client)) errors.push('raw esm export');
if(!client.includes('id: "vi"')||!client.includes('label: "Tiếng Việt"')) errors.push('language registration');
if(!client.includes('fallback: "en"')) errors.push('fallback');
if(/Ã¡|Ã |Ã¢|Ã£|Ã¨|Ã©|Ãª|Ã¬|Ã­|Ã²|Ã³|Ã´|Ãµ|Ã¹|Ãº|Ã½|Ä‘|Æ°|Æ¡|áº|á»|â€/.test(JSON.stringify(vi))) errors.push('mojibake');
for(const ns of Object.keys(en)){
 if(!vi[ns]){errors.push('missing namespace '+ns);continue}
 const ek=Object.keys(en[ns]),vk=Object.keys(vi[ns]);
 if(ek.length!==vk.length) errors.push('key count '+ns+' '+vk.length+'/'+ek.length);
 for(const key of ek){
   if(!(key in vi[ns])){errors.push('missing '+ns+'.'+key);continue}
   if(ph(en[ns][key]).join('|')!==ph(vi[ns][key]).join('|')) errors.push('placeholder '+ns+'.'+key);
 }
}
const count=Object.values(vi).reduce((n,d)=>n+Object.keys(d).length,0);
if(meta.extensions?.betterSidebar?.entries!==506) errors.push('betterSidebar metadata');
if(meta.extensions?.rewind?.entries!==37) errors.push('rewind metadata');
if(meta.coverage?.missingEntries!==0) errors.push('coverage missing');
if(meta.coverage?.translatedEntries!==count) errors.push('coverage count');
if(meta.coverage?.percent!==100) errors.push('coverage percent');
if(errors.length){console.error(errors.slice(0,50).join('\n'));process.exit(2)}
console.log(JSON.stringify({ok:true,namespaces:Object.keys(vi).length,entries:count,coverage:meta.coverage.percent,upstream:meta.upstream},null,2));
