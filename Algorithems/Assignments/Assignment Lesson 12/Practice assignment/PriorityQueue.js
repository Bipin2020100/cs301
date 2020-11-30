
/*eslint-disable */

var log = console.log; //shortcut for console.log
if (typeof alert === "undefined") var alert = console.log; //this will log in node and alert in browser
if (typeof prompt === "undefined") var prompt = require("prompt-sync")();

const Tree = require('./MinHeap.js');

class Item  {
    constructor(key, elem) {
        this._key = key;
        this._elem = elem;
    }
    key() {
        return this._key;
    }
    element() {
        return this._elem;
    }
}
function compare(item1, item2) {
    return item1.key() - item2.key();
}
class PriorityQueue {
    constructor() {
        this._heap = new Tree.MinHeap(compare);
    }
    insertItem(key, elem) { // returns the Position containing new Item
        let newItem = new Item(key, elem);
        return this._heap.insertElem(newItem);
    }
    removeMin() {
        let item = this._heap.removeMin();
        return item.element();
    }
    minKey() {
        let item = this._heap.minElement();
        return item.key();
    }
    minElement() {
        let item = this._heap.minElement();
        return item.element();
    }
    size() {
        return this._heap.size();
    }
    isEmpty() {
        return this._heap.isEmpty();
    }
}

exports.PriorityQueue = PriorityQueue;