'use strict';
const Vertex = require('./Vertex');
const Edge = require('./Edge');
class Graph {
    constructor() {
        this.adjacencyList = new Map();
    }
    addVertex(vertex) {
        this.adjacencyList.set(vertex, []);
    }
    addDirectedEdge(start, end, weight) {
        if (!this.adjacencyList.has(start) || !this.adjacencyList.has(end)) {
            console.log(`vertex does not exist`)
            return;
        }
        else {
            const adjacencies = this.adjacencyList.get(start);
            let edge = new Edge(end, weight);
            adjacencies.push(edge);
        }
    }
}

const zero = new Vertex(0);
const one = new Vertex(1);
const two = new Vertex(2);
const three = new Vertex(3);
const four = new Vertex(4);
const five = new Vertex(5);


const shihab = new Vertex('shihab');


const myGraph = new Graph();

myGraph.addVertex(zero);
myGraph.addVertex(one);
myGraph.addVertex(two);
myGraph.addVertex(three);
myGraph.addVertex(four);
myGraph.addVertex(five);

console.log(myGraph);


myGraph.addDirectedEdge(zero, five);
myGraph.addDirectedEdge(zero, three);
myGraph.addDirectedEdge(three, one);
myGraph.addDirectedEdge(four, one);
myGraph.addDirectedEdge(two, three);
myGraph.addDirectedEdge(zero, two);
myGraph.addDirectedEdge(five, four);





myGraph.addDirectedEdge(shihab, one);


console.log("after", myGraph);

for (const [k, v] of myGraph.adjacencyList.entries()) {
    console.log('k=> ', k, 'v=> ', v);
}