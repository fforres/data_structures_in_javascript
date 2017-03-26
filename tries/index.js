function Trie() {
  this.data = {}
}

Trie.prototype.addWork = function (string) {
  let currentLevel = this.data;
  let stringArr = string.split('')
  while (stringArr.length) {
    const char = stringArr.shift()
    if(!currentLevel[char]) {
      currentLevel[char] = {
        letters: 0,
      };
    }
    currentLevel[char].letters += 1;
    currentLevel = currentLevel[char];
  }
  currentLevel.wordEnd = true
  currentLevel.word = string;
}
Trie.prototype.show = function () {
  console.log(require('util').inspect(this.data, { depth: null, colors: true }));
}

var t =  new Trie()

t.addWork('Hola Mundo')
t.addWork('Hola Familia')
t.addWork('Hola Familias')
t.addWork('Que cuentas')
t.addWork('Que pasa?')
t.addWork('Holi')

t.show()
