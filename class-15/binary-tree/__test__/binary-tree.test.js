'use strict';
const BinaryTree = require('../binary-tree');
const Node = require('../node');

let tree = null;

describe("Binary Tree", () => {
    beforeAll(() => {
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
    });
    it("constructor", () => {
        const newTree = new BinaryTree();
        expect(newTree.root).toBeNull();
        expect(tree.root.value).toEqual(1);
    });
    it('preOrder', () => {
        let expectedOutput = [1, 2, 6, 7, 8, 9, 3, 4, 5];
        let preOrder = tree.preOrder();
        expect(preOrder).toEqual(expectedOutput);
    });
    it('inOrder', () => {
        let expectedOutput = [6, 8, 7, 9, 2, 1, 4, 3, 5];
        let inOrder = tree.inOrder();
        expect(inOrder).toEqual(expectedOutput);
    });
    it('postOrder', () => {
        let expectedOutput = [8, 9, 7, 6, 2, 4, 5, 3, 1];
        let postOrder = tree.postOrder();
        expect(postOrder).toEqual(expectedOutput);
    });
})