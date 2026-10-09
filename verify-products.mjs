import fs from 'node:fs';
import vm from 'node:vm';
import assert from 'node:assert/strict';
const globals={console,Symbol,Map};
const context=vm.createContext(globals);
let colorScheme='light';
const tokens=new Map();
const events=new Set();
const states=new Map();
const cleanups=new Map();
for(const variant of ['pink','purple']) {
 const id='dsh-sakura-'+variant;
 let module;
 context.window={__ModuleLoader__:{load({id:moduleId,factory}) {
  assert.equal(moduleId,id);
  module=factory(name => { assert.equal(name,'react'); return {useLayoutEffect(){}} });
 }}};
 vm.runInContext(fs.readFileSync(new URL('./sakura-'+variant+'/lib/client.js',import.meta.url),'utf8'),context);
 const disposers=[];
 const ctx={
  theme:{getTheme:()=>({active:{colorScheme}}),overrideTokens(source,value){tokens.set(source,value); return ()=>tokens.delete(source)}},
  on(event,fn){assert.equal(event,'theme/change');events.add(fn);return ()=>events.delete(fn)},
  effect(factory){disposers.push(factory())},
  slots:{inject(name,fn){assert.equal(name,'shell.overlay');fn()},register(spec){assert.equal(spec.id,id);states.set(id,spec.inject().hooks.lightMode)}},
 };
 module.apply(ctx);
 cleanups.set(id,()=>{for(const dispose of disposers) dispose()});
 assert.equal(tokens.size,1,'only one palette may be active');
 assert.equal(states.get(id).value,true);
}
assert.equal(states.get('dsh-sakura-pink').value,false,'second edition withdraws first artwork');
assert.equal(tokens.has('dsh-sakura-purple'),true);
colorScheme='dark'; for(const fn of [...events]) fn();
assert.equal(tokens.size,0); for(const state of states.values()) assert.equal(state.value,false);
colorScheme='light'; for(const fn of [...events]) fn();
assert.equal(tokens.size,1);assert.equal(states.get('dsh-sakura-purple').value,true);
cleanups.get('dsh-sakura-purple')();
assert.equal(tokens.size,1);assert.equal(states.get('dsh-sakura-pink').value,true,'remaining edition resumes after owner unload');
cleanups.get('dsh-sakura-pink')();
assert.equal(tokens.size,0);assert.equal(events.size,0);
console.log('Both built plugins passed: palette exclusivity, dark-mode withdrawal, owner unload fallback and complete cleanup.');
