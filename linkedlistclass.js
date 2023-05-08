class Node {
    constructor(data){
        this.data = data;
        this.next = null;

    }
}

class LinkedList {
    constructor(){
        this.head = null;
    }
printList() {

  let thead = this.head;
  while(thead != null)
  {
    console.log(thead.data);
    thead = thead.next;
  }
}

insertTail(data)
{
 if(this.head == null)
 {
  this.head = new Node(data);
 }
else {
  let thead=this.head;
  while(thead.next != null)
  {
    thead = thead.next;
  }
  thead.next = new Node(data);
}
}

insertHead(data)
{
  let newNode = new Node(data);
  newNode.next = this.head;
  this.head = newNode;
}
//  or
// {
//  let thead = this.head;
//  this.head = new Node(data);
//  this.head.next = thead;
// }

}

let list = new LinkedList();

list.insertTail(3);
list.insertTail(5);
list.insertTail(7);
list.insertTail(9);
list.insertHead(10);

list.printList();



