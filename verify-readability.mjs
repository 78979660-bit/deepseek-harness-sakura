import fs from 'node:fs';
import assert from 'node:assert/strict';
const root=new URL('./',import.meta.url);
const read=p=>fs.readFileSync(new URL(p,root),'utf8');
const rgb=s=>s.startsWith('#')?s.slice(1).match(/../g).map(v=>parseInt(v,16)):s.match(/[\d.]+/g).map(Number);
const over=(fill,bg)=>{const c=rgb(fill);return c.slice(0,3).map((v,i)=>v*(c[3]??1)+bg[i]*(1-(c[3]??1)));};
const luminance=c=>c.map(v=>{v/=255;return v<=.04045?v/12.92:((v+.055)/1.055)**2.4;}).reduce((n,v,i)=>n+v*[.2126,.7152,.0722][i],0);
const contrast=(a,b)=>{const x=luminance(a),y=luminance(b);return (Math.max(x,y)+.05)/(Math.min(x,y)+.05);};
const report=[];
for(const edition of ['pink','purple']) {
 const dir='sakura-'+edition;
 const tokens=Object.fromEntries([...read(dir+'/src/client/skin.ts').matchAll(/'([^']+)': '([^']+)'/g)].map(m=>[m[1],m[2]]));
 assert.equal(read(dir+'/src/client/shared-surfaces.css'),read('shared/surfaces.css'),'shared material must stay identical');
 const base=['--dsw-alias-bg-layer-1','--dsw-alias-bg-layer-2','--dsw-alias-bg-overlay','--sakura-trajectory-solid'].map(k=>({label:k,rgb:rgb(tokens[k])}));
 // Conservative scene samples used to model a translucent trajectory plate.
 const scenes=edition==='pink'?['#C990AB','#D49BB4','#ECB6CA']:['#AA8ABC','#B391CF','#CCB5E5'];
 for(const scene of scenes)base.push({label:'trajectory over '+scene,rgb:over(tokens['--sakura-trajectory-fill'],rgb(scene))});
 const text=['label-secondary','label-tertiary','label-caption','state-success-primary','state-success-secondary','state-warn-label','state-warn-primary','state-warn-secondary','state-error-primary','state-error-secondary','state-business-primary','brand-text','link'];
 let min=Infinity;
 for(const key of text)for(const bg of base){const c=contrast(rgb(tokens['--dsw-alias-'+key]),bg.rgb);assert.ok(c>=4.5,edition+' '+key+' on '+bg.label+': '+c.toFixed(2));min=Math.min(min,c);}
 for(const state of ['added','deleted']) {
  const marker=rgb(tokens['--dsw-alias-file-diff-'+state+'-marker']);
  for(const surface of ['bg','gutter'])assert.ok(contrast(marker,rgb(tokens['--dsw-alias-file-diff-'+state+'-'+surface]))>=4.5);
 }
 let toastMin=Infinity;
 for(const scene of scenes){const bg=over(tokens['--sakura-toast-fill'],rgb(scene));for(const key of ['toast-label','brand-text','state-warn-label','state-success-primary']){const c=contrast(rgb(tokens['--dsw-alias-'+key]),bg);assert.ok(c>=4.5);toastMin=Math.min(toastMin,c);}}
 const off=rgb(tokens['--sakura-switch-track-off']);
 assert.ok(contrast(off,rgb(tokens['--dsw-alias-bg-layer-2']))>=3,'off switch outline');
 assert.ok(contrast(off,rgb(tokens['--dsw-alias-switch-thumb']))>=3,'off switch thumb');
 if(edition==='purple') for(const k of ['bg-multi-select','interactive-bg-hover-solid','fill-l2','button-floating-hover','border-l2-darkmode-thin','border-l3','border-l4','scrollbar-bg-l2','scrollbar-hover-l1','scrollbar-hover-l2']) {
  const c=rgb(tokens['--dsw-alias-'+k]); assert.ok(c[2]>c[0]&&c[0]>c[1],k+' must stay violet');
 }
 report.push({edition,minimumTextContrast:Number(min.toFixed(2)),minimumToastContrast:Number(toastMin.toFixed(2)),modeledSceneSamples:scenes});
}
fs.writeFileSync(new URL('readability-report-1.7.0.json',root),JSON.stringify({note:'Declared surfaces and modeled translucent backgrounds; not a guarantee for every artwork pixel.',results:report},null,2)+'\n');
console.log(JSON.stringify(report));
