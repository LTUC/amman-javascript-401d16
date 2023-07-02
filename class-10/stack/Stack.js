const Node = require('./Node.js');

class Stack {
    constructor() {
        this.top = null;
        this.length = 0;
    }
    isEmpty() {
        if (this.top === null) {
            return true;
        } else {
            return false;
        }

        // return this.top === null;
    }

    push(value) {
        if (this.isEmpty()) {
            const newNode = new Node(value);
            this.top = newNode;
            this.length++;
        }
        else {
            const newNode = new Node(value);
            newNode.next = this.top;
            this.top = newNode;
            this.length++;
        }
    }
    pop() {
        if (this.isEmpty()) {
            console.log('empty stack');
            return false;
        }
        const temp = this.top;
        this.top = this.top.next;
        temp.next = null;
        this.length--;
        return temp.value;
    }

    peek() {
        if (this.isEmpty()) {
            return 'sorry stack is empty';
        }
        return this.top.value;
    }
}


module.exports = Stack;