/* eslint-disable strict */
class Node {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }
}

class Stack {
  constructor() {
    this.top = null;
  }

  push(value) {
    this.top = new Node(value, this.top);
    return this;
  }

  pop() {
    const popped = this.top;
    this.top = this.top.next;
    return popped.value;
  }
}
