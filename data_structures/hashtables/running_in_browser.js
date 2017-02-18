const crypto = require('crypto')
function HashMap() {
  this.map = {}
}

HashMap.prototype.createHash = (key) => {
  return JSON.stringify(key);
}

HashMap.prototype.set = function (data, value){
  this.map[this.createHash(data)] = value;
  return this;
}

HashMap.prototype.get = function (data) {
  return this.map[this.createHash(data)];
}

const hash = new HashMap()
const hashedpass = hash.createHash({})
hash.set({}, 'hola watzos');
console.log(require('util').inspect(hash.get({}, 'hola watzos'), { depth: null }));
