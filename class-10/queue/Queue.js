const Node = require('./Node.js');

class Queue {
    constructor() {
        this.front = null;
        this.rear = null;
        this.length = 0;
    }
    isEmpty() {
        if (this.front === null || this.length === 0) {
            return true
        } else {
            return false;
        }
        // return this.front ===null;
        // return this.length ===0;
    }
    enqueue(value) {
        const newNode = new Node(value);
        if (this.isEmpty()) {

            this.front = newNode;
            this.rear = newNode;
            this.length++;

        } else {
            this.rear.next = newNode;
            this.rear = newNode;
            this.length++;
        }

    }

    dequeue() {
        if (this.isEmpty()) {
            return 'sorry queue is empty'
        }
        const temp = this.front;
        this.front = this.front.next;
        temp.next = null;
        this.length--;
        return temp.value;
    }
    peek() {
        if (this.isEmpty()) {
            return null;
        }
        return this.front.value;
    }

}
module.exports = Queue;