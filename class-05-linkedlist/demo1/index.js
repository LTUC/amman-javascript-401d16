// // // in EC5
// // let Animal = function (name, legs) {
// //     this.name = name;
// //     this.legs = legs;
// // }

// // Animal.prototype.walk = function () {
// //     this.isWalking = true;
// //     console.log(`${this.name} is walking`)
// // }
// // Animal.prototype.eat = function () {
// //     this.isEating = true;
// //   console.log(`${this.name} is eating`)
// // }

// // let koko = new Animal('koko', 4);
// // // koko.walk();
// // // koko.eat();

// // // function Dog(name, legs, breed) {
// // //     this.name = name;
// // //     this.legs = legs;
// // //     this.breed = breed;
// // // }

// // let Dog = function (name, legs, breed) {
// //     Animal.call(this, name, legs);
// //     this.breed = breed;
// // }
// // Dog.prototype = Object.create(Animal.prototype);
// // // or
// // // Dog.prototype = new Animal();

// // let rex = new Dog('rex',4,'husky');
// // rex.walk();
// // rex.eat();

// //in ES6
// class Animal{
//   constructor(name,legs){
//     this.name= name;
//     this.legs=legs;
//   }
//   walk(){
//     this.isWalking = true;
//     console.log(`${this.name} is walking`)
//   }
//   eat(){
//     this.isEating = true;
//     console.log(`${this.name} is eating`)
//   }
// }
// let fofo = new Animal('fofo',4);
// // fofo.walk();
// // fofo.eat();
// // console.log(fofo);

// class Dog extends Animal{
//   constructor(name,legs,breed){
//     super(name,legs);
//     this.breed= breed;
//   }
//   speak(){
//     console.log("woooooof!");
//   }
// }

// let lili = new Dog('lili',4,'husky');

// lili.walk();
// lili.eat();
// lili.speak();

// let arr = [1,2,3,4,5];
// // arr[2]=> 3 O(1)
// let std = {
//   name:'ahmad',
//   grade:100
// }
// std.name >> ahmad O(1)
// arr.push(9)>>>[1,2,3,4,5,9]; O(1)
// arr.pop() >>> [1,2,3,4,5]; O(1)
// console.log(1000*100009999);>>> O(1)
// function print1(n){
// for(let i = 1;i<=5;i++){ ///O(1)
//   console.log(i) //O(1)
// }
// }

// print1(1000000000);


// console.log('**********************')

// function print2(n){
// for(let i = 1;i<=n;i++){ //O(n)
//   console.log(i) //O(1)
// }
// }

// print2(100);

// binary search 
// let nums = [1,3,6,9,10,12,15,22,25,26,29,32,35,45......];

// function search(num){
//   for(let i=0;i<nums.lenght;i++){O(n)
//     if(num==nums[i]){O(1)
//       break;O(1)
//       console.log('i found it')O(1)
//     }
//   }
// }
// O(n)*O(1)*O(1)*O(1)>> O(n)
// search(1)> number of iterations 1
// search(45)> number of iterations 14
// O(n)

// search(32) O(logn)
// O(logn)*O(1)*O(1)*O(1)>> O(logn)

// O(n)

// O(n logn)


// function nlogn(n){
//   let y= n; // time O(1) /  space O(n)
//   while(n>1){ 
//     //O(logn)
//     n= Math.floor(n/2);//O(1)
//     for(let i = 0 ; i<=y ;i++){//O(n)
//       console.log(i)//O(1)
//     }
//   }
// }

// nlogn(20);//O(1)*O(logn)*O(1)*O(n)*O(1)>>> O(nlogn)


// O(n^2)
// function square(n){
//   for (let i = 0; i < n; i++) {//O(n)
//       for (let j = 0; j < n; j++) {//O(n)
//         console.log(i, j);
//       }
//     }
// }

// square(5)//O(n)*O(n) >>>> O(n^2)

// let a = [1, 2, 3, 4, 5];//O(1)
// let b = [1, 3, 4, 6, 7];//O(1)
// function abc(a, b) {
//   let count = 0;//O(1)
//   for (let i = 0; i < a.length; i++) {//O(a)
//     for (let j = 0; j < b.length; j++) {//O(b)
//       if (a[i] === b[j]) {
//         count++;
//       }
//     }
//     return count;
//   }
//   console.log(count);
// }

// >>> O(a)*O(b) not O(n^2)

// function cube(n) {
//   for (let i = 0; i < n; i++) {O(n)
//     for (let j = 0; j < n; j++) {O(n)
//       for (let h = 0; h < n; h++) {O(n)
//         console.log(i, j, h);
//       }
//     }
//   }
// }

// O(n^3)

// function fact(n){
//   let result = 1;//space O(1)
//   if(n===0 || n===1){
//     return 1;
//   }
//   else{
//     return n*fact(n-1);
//   }
// }
// console.log(fact(4));
// console.log(fact(10));

// function sum(arr) {
//   var total = 0;//time O(1) space O(1)
//   for (let i = 0; i < arr.length; i++) {//O(n)
//     total += arr[i]; //space O(n)  O(1)
//   }
//   return total;
// }
// sum([1, 3, 4]);


// function sayHiNTimes(n) {
//   const hiArray = [];//space O(n)
//   for (let i = 0; i < n; i++) {//O(n)
//     hiArray[i] = "hi";
//   }
//   return hiArray;
// }
// console.log(sayHiNTimes(5));

function getLargestItem(items) {
    let largest = items[0];//O(1)
    items.forEach((item) => {
        if (item > largest) {
            largest = item;
        }
    });
    return largest;
}
console.log(getLargestItem([1, 3, 5, 11, 4, 3, 55]));


const Linkedlist = require('./lib/LinkedList');
const ll = new Linkedlist();
ll.append(1);
ll.append(2);
ll.append(3);


console.log(ll);