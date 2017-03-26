const linkedList = require('./index.js')

linkedList.removeDupes = function () {
  let currentNode = this.initialNode;
  const baseOb = {}
  while (currentNode.nextNode) {
    if (!baseOb[currentNode.data]) {
      baseOb[currentNode.data] = 0;
    }
    baseOb[currentNode.data] += 1;
    if (baseOb[currentNode.data] > 1) {
      currentNode.prevNode.nextNode = currentNode.nextNode
      currentNode.nextNode.prevNode = currentNode.prevNode
    }
    currentNode = currentNode.nextNode;
  }
  return this;
}

linkedList.show().removeDupes().show()
