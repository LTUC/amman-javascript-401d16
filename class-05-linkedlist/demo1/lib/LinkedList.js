'use strict';
const Node = require('./Node');
class Linkedlist {
    constructor() {
        this.head = null;
        // this.tail = null;
        // this.size=
    }
    append(value) {
        const newNode = new Node(value);
        if (!this.head) {
            //if the linkedlist is empty
            this.head = newNode;
            return this;
        }
        let currentNode = this.head;
        while (currentNode.next) {
            currentNode = currentNode.next;
        }
        currentNode.next = newNode;
        return this;
    }
    
}

module.exports = Linkedlist;