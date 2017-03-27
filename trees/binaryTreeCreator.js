const binaryTreeData = require('./binaryTreeData');

function Node(data) {
  this.data = data;
  this.leftNode = null;
  this.rightNode = null;
  this.parentNode = null;
}
function Tree (node) {
  this.root = node;
}
Tree.prototype.show = function() {
  console.log(require('util').inspect(this, { depth: null }));
}

const OB = {}
const creatOrReturn = (index) => {
  if(!OB[index]) {
    OB[index] = new Node(index);
  }
  return OB[index];
}

for (index in binaryTreeData) {
  const main = creatOrReturn(index);
  if(binaryTreeData[index][0]) {
    main.leftNode = creatOrReturn(binaryTreeData[index][0]);
  }
  if(binaryTreeData[index][1]) {
    main.rightNode = creatOrReturn(binaryTreeData[index][1]);
  }
}

console.log(require('util').inspect(OB[0], { depth: null, colors: true  }));
module.exports = new Tree(OB[0])
