function Queue() {
  this.data = [];
}

Queue.prototype.dequeue = function () {
  return this.data.shift()
}
Queue.prototype.queue = function (data) {
  this.data.push(data)
  return this;
}
Queue.prototype.peek = function () {
  return this.data[0];
}
Queue.prototype.isEmpty = function () {
  return (this.data.length === 0)
}


var q =  new Queue()

q.queue(2)
.queue(12)
.queue(23)
.queue(24)
.queue(25)
.queue(26)
.queue(27)

console.log(q.peek())
q.dequeue()
console.log(q.peek())
