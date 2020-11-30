


/*eslint-disable */

var log = console.log; //shortcut for console.log
if (typeof alert === "undefined") var alert = console.log; //this will log in node and alert in browser
if (typeof prompt === "undefined") var prompt = require("prompt-sync")();


class NPos {
    constructor (elem, prev, next) {
        // inserts this new node between prev and next
        this._elem = elem;
        this._prev = prev;
        this._next = next;
        if (prev != null) {
            prev._next = this;
        }
        if (next != null) {
            next._prev = this;
        }
    }
    element() {
        return this._elem;
    }
}
class DLinkedList {
    constructor() {
        this._header = new NPos(null, null, null);
        this._trailer = new NPos(null, this._header, null);
        this._header._next = this._trailer;
        this._size = 0;
    }
    isFirst(p) {
        return (this._header == p._prev);
    }
    isLast(p) {
        return (this._trailer == p._next);
    }
    size() {
        return this._size;
    }
    isEmpty() {
        return this._size == 0;
    }
    first() {
        if (this.isEmpty()) {
            throw new Error("Invalid first() on an empty List");
        } else {
            return this._header._next;
        }
    }
    last() {
        if (this.isEmpty()) {
            throw new Error("Invalid last() on an empty List");
        } else {
            return this._trailer._prev;
        }
    }
    after(p) {
        if (p._next == this._trailer) {
            throw new Error("Invalid after(p)--off the end");
        }
        return p._next;
    }
    before(p) {
        if (p._prev == this._header) {
            throw new Error("Invalid before(p)--off the front");
        }
        return p._prev;
    }
    replaceElement(p, elem) {
        let oldElem = p._elem;
        p._elem = _elem;
        return oldElem;
    }
    swapElements(p, q) {
        let temp = p._elem;
        p._elem = q._elem;
        q._elem = temp;
    }
    insertAfter(p, elem) {
        let newNode = new NPos(elem, p, p._next);
        this._size++;
        return newNode;
    }
    insertBefore(p, elem) {
        let newNode = new NPos(elem, p._prev, p);
        this._size++;
        return newNode;
    }
    insertFirst(elem) {
        let newNode = new NPos(elem, this._header, this._header._next);
        this._size++;
        return newNode;
    }
    insertLast(elem) {
        let newNode = new NPos(elem, this._trailer._prev, this._trailer);
        this._size++;
        return newNode;
    }
    remove(p) {
        p._prev._next = p._next;
        p._next._prev = p._prev;
        p._prev = null;  // should no longer reference a Position in the List
        p._next = null;
        this._size--;
    }
    print() {
        let res = "[";
        let iter = this.interator();
        while (iter.hasNext()) {
            res = res + iter.nextObject();
            if (iter.hasNext()) {
                res = res + ", ";
            }
        }
        console.log(res + "]\n");
    }
    interator() {
        return new ListIterator(this);
    }

//     push(e){
//         this.insertFirst();// to implement stack ADT using DLinkedlist
//     }

//     pop(){
//         let r = this.remove(this.first());// to implement stack ADT using DLinkedlist
//     }
}
class ListIterator {
    constructor(seq) {
        this._seq = seq;
        this.reset();
    }
    hasNext() {
        return this._nextPos != null;
    }
    nextObject() {
        if (this._nextPos._prev == null) { // bug 2
            throw new Error("Invalid Position in Iterator: the Position has been deleted");
        }
        let nextElem = this._nextPos.element();
        if (this._seq.isLast(this._nextPos)) {
            this._nextPos = null;
        } else {
            this._nextPos = this._seq.after(this._nextPos);
        }
        return nextElem;
    }
    reset() {
        if (this._seq.isEmpty()) {
            this._nextPos = null;
        } else {
            this._nextPos = this._seq.first();
        }
    }
}
var tst0 = new DLinkedList();
tst0.print();
var tst1 = new DLinkedList();
tst1.insertFirst(5);
tst1.print();
var tst2 = new DLinkedList();
tst2.print();
tst2.insertFirst(1);
tst2.print();
tst2.insertLast(3);
tst2.print();
tst2.insertAfter(tst2.before(tst2.after(tst2.first())), 2);
tst2.print();
tst2.remove(tst2.after(tst2.first()));
tst2.print();
tst2.insertFirst(0);
tst2.insertLast(4);
tst2.insertAfter(tst2.after(tst2.first()), 2);
tst2.print();
console.log(tst2.after(tst2.after(tst2.after(tst2.first()))).element());
console.log("first = " + tst2.first().element());
console.log("last  = " + tst2.last().element());




    ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/**
 * 
 * Implement in JavaScript the function findMiddle(L) than we did in class. The
DLinkedList class is provided in the DLinkedList.js file.  
 */
function findMiddle(l) {
    if (l.isEmpty()){
        return null;
    }
    let p = l.first();
    let q = l.last();

    while (p !== q && l.after(p) !== q){
        p = l.after(p);
        q = l.before(q);
    }
    return q;
}
console.log(findMiddle(tst2));
console.log(findMiddle(tst1));
console.log(findMiddle(tst0));

////////////////////////////////////////////////////////////////////////////////////////////

class Stack{
    constructor(){
        this._st = new DLinkedList(); // Implementing stack ADT using DLinkedList.js
    }
    push (e){
        this._st.insertFirst(e)
    }
    pop(){
        return this._st.remove(this._st.first())
    }
    get(){
        return this._st.print();
    }
}
// let ab = new Stack;
// ab.push(25);
// ab.push(25);
// ab.push(25);
// ab.get();
////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////

class Queue{
    constructor(){
        this._que = new DLinkedList(); // Implementing queue ADT using DLinkedList.js
    }
    enqueue(e){
        this._que.insertFirst(e);
    }
    dequeue(){
        return this._que.remove(this._que.last());
    }
    get(){
        return this._que.print();
    }
}
let aab = new Queue;
aab.enqueue(25)
aab.enqueue(23)
aab.dequeue()
aab.get();
//////////////////////////////////////////////////////////////////////////////////////////////////////////
/* Function to implement the queue ADT using two stacks. What is the running time for enqueue and dequeue?*/

class QueTwoStack{
    constructor(){
        this.enq = new Stack;
        this.deq = new Stack; 
        this._que = new DLinkedList();
    }
    enqueue(e){
        this.enq.push(e);
    }
    dequeue(){
        if this.deq.size()= 0{
            if this.enq.isEmpty(){
                retrun null;
            } else {
                while this.enq.size()> 0 {
                    this.deq.push(enq.pop())
                }
            }
        }
        return this.deq.pop();
    }
    get(){
        return this._que.print();
    }
}

let check = new QueTwoStack;
check.enqueue(1)
check.enqueue(2)
check.enqueue(3)
check.get()
//////////////////////////////////////////////////////////////////////////////////////////////////////////
