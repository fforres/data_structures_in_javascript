const crypto = require('crypto')
function HashMap() {
  this.map = {}
}

HashMap.prototype.createHash = (key) => {
  let newKey = key;
  if (Array.isArray(key)) {
    newKey = JSON.stringify(key)
  } else if (typeof key === 'object') {
    newKey = JSON.stringify(key)
  }
  const cipher = crypto.createCipher('aes192', newKey);
  let encrypted = cipher.update('some clear text data', 'utf8', 'hex');
  encrypted += cipher.final('hex');
  return encrypted;
}

HashMap.prototype.set = function (data, value){
  this.map[this.createHash(data)] = value;
  return this;
}

HashMap.prototype.get = function (data) {
  return this.map[this.createHash(data)]
}

const hash = new HashMap()
const hashedpass = hash.createHash({})
hash.set({}, 'hola watzos');
console.log(require('util').inspect(hash.get({}, 'hola watzos'), { depth: null }));
