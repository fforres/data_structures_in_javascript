const linkedList = require('./index.js')

linkedList.removeItem = function (data) {
  let currentNode = this.initialNode;
  while (currentNode.nextNode) {
    if(currentNode.data === data) {
      currentNode.prevNode.nextNode = currentNode.nextNode
      currentNode.nextNode.prevNode = currentNode.prevNode
      break;
    }
    currentNode = currentNode.nextNode;
  }
  return this;
}

linkedList.show().removeItem(19).show()
