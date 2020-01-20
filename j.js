class Node {
  constructor(data, next=null) {
    this.data = data;
    this.next = next;
  }
}
class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }
//  1 add to header
insertToHead(){
   let data = document.getElementById('data').value;
   let res = document.getElementById('res');
  this.head = new Node(data, this.head);
  res.innerHTML = this.head.data;
  this.size++;
}
// 2 add to last

insertLast(){
  let data = document.getElementById('data').value;
  let res = document.getElementById('res');
  let node = new Node(data);
  let tmp;
  // if empty
  if (!this.head) {
    this.head = node;
  }else {
    tmp = this.head;
    while (tmp.next) {
      tmp = tmp.next;
    }
    tmp.next = node;
  }
  this.size++;
  res.innerHTML = node.data + "<br>";
}

//  3 insert at index
insertAt(){
  let data = document.getElementById('data').value;
  let index = document.getElementById('index').value;
  // if index out of range
if (index > 0 && index > this.size) {
  return;
}
  // if index = 0
if (index === 0) {
  this.head = new Node(data, this.head);
  return;
}
let node = new Node(data);
let current;
let prev;

current = this.head;
let count = 0;

while (count < index) {
  prev = current;
  count++;
  current = current.next;
}
node.next = current;
prev.next = node;
}

// 4 get at index
getAt(){
  let index = document.getElementById('index').value;
  let res = document.getElementById('res');
  if (index > 0 && index > this.size) {
    return;
  }
  let current;
  let count = 0;

current = this.head;
  while (count < index) {
    count++;
    current = current.next;
  }
  console.log(current.data);
  res.innerHTML = current.data;


}

//  5 print LinkedList
printList(){
  res.innerHTML = "";
  let tmp = this.head;
  while (tmp) {
    res.innerHTML += tmp.data + "<br>";
    // console.log(tmp.data);
    tmp = tmp.next;
  }
}

 // 6 remove at index
removeAt(){
  let index = document.getElementById('index').value;
  if (index > 0 && index > this.size) {
    return;
  }
  let current;
  let prev;
  let count = 0;

current = this.head;
  while (count < index) {
    prev = current;
    count++;
    current = current.next;
  }
  prev.next = current.next;
}

 // 7 clear list

clearList(){
  let res = document.getElementById('res');
this.head = null;
this.size = 0;
res.innerHTML = "list is empty";

}



}

let ll = new LinkedList();
// // ll.insertToHead(123);
// ll.insertToHead(1243);
// ll.insertToHead(131);
// ll.insertLast(999);
// ll.insertAt(11,0);
// // ll.clearList();
// ll.removeAt(1);
//  console.log(ll);
// ll.printList();


function insertToHead(){
  ll.insertToHead();
}

function insertLast(){
  ll.insertLast();
}

function insertAt(){
  ll.insertAt();
}

function getAt(){
  ll.getAt();
}

function removeAt(){
  ll.removeAt();
}

function clearList(){
  ll.clearList();
}

function printList(){
  ll.printList();
}
