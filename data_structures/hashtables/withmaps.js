const dots = () => console.log(require('util').inspect('.....................', { depth: null, colors: true, }));
console.log(require('util').inspect('HASHTABLES WITH MAPS', { depth: null }));

const map = new Map()
const keyString = 'hola mundo';
const keyString2 = 'hola people';
const keyObj = {};
const keyObj2 = {};
const keyObj3 = {
  sup: 'world'
};
const keyObj4 = {
  sup: 'world'
};
const keyFunc = () => {}
const keyFunc2 = function() {}

map.set(keyString,'keyString');
map.set(keyString2,'keyString2');
map.set(keyObj,'keyObj');
map.set(keyObj2,'keyObj2');
map.set(keyObj3,'keyObj3');
map.set(keyObj4,'keyObj4');
map.set(keyFunc,'keyFunc');
map.set(keyFunc2,'keyFunc2');

dots()
console.log(require('util').inspect(map, { depth: null, colors: true, }));
dots()
console.log(require('util').inspect(map.get(keyString), { depth: null, colors: true, }));
console.log(require('util').inspect(map.get('hola mundo'), { depth: null, colors: true, }));
console.log(require('util').inspect(map.get(keyString2), { depth: null, colors: true, }));
dots()
console.log(require('util').inspect(map.get(keyObj), { depth: null }));
console.log(require('util').inspect(map.get(keyObj2), { depth: null }));
console.log(require('util').inspect(map.get({}), { depth: null }));
dots()
console.log(require('util').inspect(map.get(keyObj3), { depth: null }));
console.log(require('util').inspect(map.get(keyObj4), { depth: null }));
console.log(require('util').inspect(map.get({sup: 'world'}), { depth: null }));
dots()
console.log(require('util').inspect(map.get(keyFunc), { depth: null }));
console.log(require('util').inspect(map.get(keyFunc2), { depth: null }));
console.log(require('util').inspect(map.get(function(){}), { depth: null }));
console.log(require('util').inspect(map.get(()=>{}), { depth: null }));
dots()
