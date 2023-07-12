// // factorial

// // 0! = 1
// // 1! = 1

// // 2! = 2*1 = 2
// // 3! = 3*2*1 = 6
// // 4!= 4*3*2*1 =?

// function fac(num) {
//     let fact = 1;
//     if (num === 0 || num === 1) {
//         return fact;
//     } else {
//         return num * fac(num - 1);
//     }
// }

// console.log(fac(4));


const BinaryTree = require('./binary-tree/binary-tree');
const Node = require('./binary-tree/node');

let tree = null;

let one = new Node(1);
let two = new Node(2);
let three = new Node(3);
let four = new Node(4);
let five = new Node(5);
let six = new Node(6);
let seven = new Node(7);
let eight = new Node(8);
let nine = new Node(9);

one.left = two;
one.right = three;
two.left = six;
three.left = four;
three.right = five;
six.right = seven;
seven.left = eight;
seven.right = nine;

tree = new BinaryTree(one);

let preOrder = tree.preOrder();
let inOrder = tree.inOrder();
let postOrder = tree.postOrder();


console.log('preOrder: ', preOrder);
console.log('inOrder: ', inOrder);
console.log('postOrder: ', postOrder);
