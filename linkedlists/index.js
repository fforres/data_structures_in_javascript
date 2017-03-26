function Node (data) {
  this.prevNode = null;
  this.nextNode = null;
  this.data = data
}
Node.prototype.addNode = function (data) {
  const n =  new Node(data)
  this.nextNode = n;
  n.prevNode = this;
  return n;
};

function List () {
  this.initialNode = null;
  this.lastNode = null;
}

List.prototype.addNode =  function (data) {
  if(!this.initialNode) {
    const n = new Node(data);
    this.initialNode = n;
    this.lastNode = n
  } else {
    this.lastNode = this.lastNode.addNode(data);
  }
  return this;
}
List.prototype.show = function () {
  console.log(require('util').inspect(this.initialNode, { depth: null, color: true }));
  return this;
}
var L = new List();
L.addNode(0)
  .addNode(1)
  .addNode(2)
  .addNode(19)
  .addNode(21)
  .addNode(21)
  .addNode(19)
  .addNode(4)
  .addNode(60)
  .addNode(3)

module.exports = L;
