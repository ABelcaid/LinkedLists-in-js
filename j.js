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
insertToHead(data){
  this.head = new Node(data, this.head);
  this.size++;
}
// 2 add to last

insertLast(data){
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
}

//  3 insert at index
insertAt(data, index){
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
getAt(index){
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
}

//  5 print LinkedList
printList(data){
  let tmp = this.head;
  while (tmp) {
    console.log(tmp.data);
    tmp = tmp.next;
  }
}

 // 6 remove at index
removeAt(index){
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
this.head = null;
this.size = 0;
}



}

let ll = new LinkedList();
// ll.insertToHead(123);
ll.insertToHead(1243);
ll.insertLast(999);
ll.insertAt(11,0);
// ll.clearList();
ll.removeAt(1);
 console.log(ll);
ll.printList();
