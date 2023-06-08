// in EC5
let Animal = function (name, legs) {
    this.name = name;
    this.legs = legs;
}

Animal.prototype.walk = function () {
    this.isWalking = true;
    console.log('i\'m walking')
}
Animal.prototype.eat = function () {
    this.isEating = true;
    console.log('i\'m eating')
}

// let koko = new Animal('koko', 4);
// koko.walk();
// koko.eat();

/*
function Dog(name, legs, breed) {
    this.name = name;
    this.legs = legs;
    this.breed = breed;
}

let Dog = function (name, legs, breed) {
    Animal.call(this, name, legs);
    this.breed = breed;
}
Dog.prototype = Object.create(Animal.prototype);
// or
// Dog.prototype = new Animal();
*/


const Linkedlist = require('./lib/LinkedList');
const ll = new Linkedlist();
ll.append(1);
ll.append(2);
ll.append(3);


console.log(ll);