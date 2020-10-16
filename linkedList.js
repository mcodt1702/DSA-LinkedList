class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.length = 0;
    this.head = null;
    this.tail = null;
  }

  view() {
    const views = [];
    let counter = 0;
    let current = this.head;
    while (counter < this.length) {
      views.push(current.value);
      current = current.next;
      counter++;
    }
    return views;
  }

  getProperties() {
    return `Length: ${this.length} || Head ${this.head.value}|| Tail ${this.tail.value} `;
  }

  insertFirst(value) {
    const node = new Node(value);
    if (!this.head) {
      this.head = node;
      this.tail = node;
      this.length++;
    } else {
      node.next = this.head;
      this.head = node;
      this.length++;
    }
  }
  insertAt(index, value) {
    if (index > this.length || index < 0) {
      return -1;
    } else if (index === 0) {
      this.insertFirst(value);
    } else if (index === this.length) {
      this.insertLast(value);
    } else {
      const newNode = new Node(value);
      let current = this.head;
      let counter = 0;
      while (counter < index - 1) {
        counter++;
        current = current.next;
      }
      let temp = current.next;
      current.next = newNode;
      newNode.next = temp;
      this.length++;
    }
    return this;
  }

  insertLast(value) {
    if (!this.head) {
      this.insertFirst(value);
    } else {
      let tempNode = this.head;
      while (tempNode.next !== null) {
        tempNode = tempNode.next;
      }
      const node = new Node(value);
      this.tail.next = node;
      this.tail = node;
      this.length++;
    }
  }

  find(value) {
    let currNode = this.head;

    if (!this.head) {
      return null;
    }

    while (currNode.value !== value) {
      if (currNode.next === null) {
        return null;
      } else {
        currNode = currNode.next;
      }
    }
    // Found it
    return currNode;
  }

  remove(item) {
    // If the list is empty
    if (!this.head) {
      return null;
    }
    // If the node to be removed is head, make the next node head
    if (this.head.value === item) {
      this.head = this.head.next;
      this.length--;
      return;
    }
    // Start at the head
    let currNode = this.head;
    // Keep track of previous
    let previousNode = this.head;

    while (currNode !== null && currNode.value !== item) {
      // Save the previous node
      previousNode = currNode;
      currNode = currNode.next;
    }
    if (currNode === null) {
      console.log("Item not found");
      return;
    }
    previousNode.next = currNode.next;
    this.length--;
  }
}

// const list = new LinkedList();
// list.insertFirst("second");
// list.insertFirst("first");

// list.insertLast("last");
// list.insertFirst("uno");
// list.insertLast("end");
// console.log(list.view());
// console.log(list.getProperties());
// console.log(list.find("uno"));

function main() {
  const SLL = new LinkedList();
  SLL.insertLast("Apollo");
  SLL.insertLast("Boomer");
  SLL.insertLast("Helo");
  SLL.insertLast("Husker");
  SLL.insertLast("Starbuck");
  console.log(SLL.view());
  SLL.insertFirst("Tauhida");
  console.log(SLL.view());
  SLL.insertAt(3, "Kat");
  console.log(SLL.view());
  console.log(SLL.getProperties());
  SLL.remove("Tauhida");
  console.log(SLL.getProperties());
  console.log(SLL.view());

  //console.log(SLL.find("marco"));
}

main();
