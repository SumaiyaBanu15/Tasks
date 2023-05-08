class Node {
    constructor(data)
    {
        this.data = data;
        this.next = null;
    }
}

class LinkedList {
    constructor(){
        this.head = null;
    }

    printList()
    {
        let nodes = [];
        let thead = this.head;
        while(thead != null)
        {
        nodes.push(thead.data);
        thead = thead.next;
        }
      console.log(nodes);  
    }

    push(data) 
    {
        let newNode = new Node(data);

        if(this.head == null){
            this.head = newNode;
        }
        else{
        let thead = this.head;
          while(thead.next != null)
          {
            thead = thead.next;
          }
          thead.next = newNode;
        }
    }
}

let list = new LinkedList();

list.push(2);
list.push(4);
list.push(6);
list.push(8);
list.push(10);

list.printList();