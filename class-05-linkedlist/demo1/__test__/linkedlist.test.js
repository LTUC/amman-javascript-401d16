'use strict';
const LinkedList = require('../lib/LinkedList');
describe("linked list", () => {
    it("create a linkedlist ", () => {
        let list = new LinkedList();
        expect(list.head).toBeNull();
    })
    it("append to linkedlist", () => {
        let list = new LinkedList();
        list.append('one');
        expect(list.head.value).toEqual('one');
        list.append('two');
        expect(list.head.value).toEqual('one');
    })
})