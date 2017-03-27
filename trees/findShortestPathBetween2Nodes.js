const graphData = {
  0: [1, 2, 3, 5, 4],
  1: [3, 4],
  2: [5, 9],
  3: [9, 12, 1, 0, 12],
  4: [1, 12, 3],
  5: [12, 14, 1, 6, 0],
  6: [],
  7: [2, 4, 6, 8],
  8: [1, 2 ,0 ,7, 8, 9],
  9: [1, 0 ,3, 5, 6, 8],
  12: [1, 0 ,3, 5, 6, 8],
}

function Graph() {
  this.data = {}
}
Graph.prototype.setOrCreateNode = function(key) {
  if(!this.data[key]) {
    this.data[key] = {
      data: key,
      connections: {},
      visited: {
        index1: false,
        index2: false,
      }
    }
  }
  return this.data[key];
}
Graph.prototype.createGraphWithData = function(data) {
  for (let key in data) {
    const value = data[key];
    const node = this.setOrCreateNode(key);
    value.forEach(el => {
      node.connections[el] = this.setOrCreateNode(el);
    });
  }
}
Graph.prototype.show = function(index) {
  console.log(require('util').inspect(this.shortestPath, { depth: 3, colors: true }));
}

Graph.prototype.findShortestPathBetween = function(start1, start2) {
  const firstNode = this.data[start1];
  const secondNode = this.data[start2];
  this.mixedBFS(firstNode, secondNode);
}
Graph.prototype.mixedBFS = function (firstNode, secondNode) {
  const queue1 = [firstNode];
  const queue2 = [secondNode];
  while (queue1.length && queue2.length) {
    const node1 = queue1.shift();
    const node2 = queue2.shift();
    if(!node1.visited.index1) {
      node1.visited.index1 = true;
    }
    if(!node2.visited.index2) {
      node2.visited.index2 = true;
    }

    let foundIt = false;
    let foundNode = null;
    if(node2.visited.index1) {
      foundIt = true;
      foundNode = node2;
    } else if (node1.visited.index2) { //It has been visited by the other pointer;
      foundIt = true;
      foundNode = node1;
    }
    if(foundIt) {
      this.retraceSteps(foundNode, firstNode, secondNode);
      break;
    }

    for (var index in node1.connections) {
      if (node1.connections.hasOwnProperty(index)) {
        node1.connections[index].parent1 = node1;
        queue1.push(node1.connections[index]);
      }
    }
    for (var index in node2.connections) {
      if (node2.connections.hasOwnProperty(index)) {
        node2.connections[index].parent2 = node2;
        queue2.push(node2.connections[index]);
      }
    }
  }
}
Graph.prototype.retraceSteps = function (foundNode, firstNode, secondNode) {
  console.log('node was at ', foundNode);
  console.log('firstNode', firstNode.data);
  console.log('secondNode', secondNode.data);
  // console.log(require('util').inspect(foundNode, { depth: 3, colors: true }));
  const finalList = [foundNode.data];
  let nodeToCheck1 = foundNode.parent1;
  let nodeToCheck2 = foundNode.parent2;
  let i = 0;
  while (nodeToCheck1 && nodeToCheck2) {
    finalList.push(nodeToCheck1.data);
    nodeToCheck1 = nodeToCheck1.parent1;

    finalList.unshift(nodeToCheck2.data);
    nodeToCheck2 = nodeToCheck2.parent2;
    i++;
    if(i===2){
      break;
    }
  }
  this.shortestPath = finalList;
}

const g = new Graph();
g.createGraphWithData(graphData);
// g.findShortestPathBetween(0, 4) // 0 4
g.findShortestPathBetween(2, 4) // 2 5 12 4
g.show();
