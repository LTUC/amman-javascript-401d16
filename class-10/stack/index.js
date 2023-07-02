const Stack = require('./Stack');


const newStack = new Stack();


newStack.push(1);
newStack.push(2);
newStack.push(3);
newStack.push(4);


console.log(newStack.peek());

newStack.pop();
console.log(newStack.peek());

console.log('pop item', newStack.pop());
console.log(newStack.peek());
