function Stack() {
  this.data = [];
}

Stack.prototype.pop = function () {
  return this.data.shift()
}
Stack.prototype.push = function (data) {
  this.data.push(data)
  return this;
}
Stack.prototype.peek = function () {
  return this.data[0];
}
Stack.prototype.isEmpty = function () {
  return (this.data.length === 0)
}


var stack =  new Stack()

stack.push(2)
.push(12)
.push(23)
.push(24)
.push(25)
.push(26)
.push(27)

stack.pop()


console.log(stack.peek())
