class LinkedList {
  constructor() {
    this.head = null;
  }
  get showFirst() {
    return this.head.data;
  }
  get length() {
    let count = 0;
    let currentNode = this.head;
    if (currentNode === null) return count;
    if (currentNode.next === null) return ++count;
    count++;
    while (currentNode.next) {
      ++count;
      currentNode = currentNode.next;
    }
    return count;
  }
  get showLast() {
    let current = this.head;
    while (current.next) {
      current = current.next;
    }
    current = current;
    return current.data;
  }
  dataAt(index) {
    try {
      if (this.head === null) throw new Error("the Linked list is empty");
      if (index > this.length - 1)
        throw new Error(
          `you can't read from ${index}, the linked list is has length of ${this.length}`
        );
      let currentIndex = 0;
      let currentNode = this.head;
      while (index !== currentIndex) {
        currentIndex++;
        currentNode = currentNode.next;
      }
      return currentNode.data;
    } catch (error) {
      return error;
    }
  }
  addToStart(node) {
    node.next = this.head;
    this.head = node;
  }
  addToEnd(node) {
    let currentNode = this.head;
    if (!this.head) {
      this.head = node;
      return this;
    } else if (!this.head.next) {
      this.head.next = node;
      return this;
    }
    while (currentNode.next.next) {
      currentNode = currentNode.next;
    }
    currentNode = currentNode.next;
    currentNode.next = node;
    return this;
  }
  addTo(index, node) {
    try {
      let currentIndex = 0;
      let currentNode = this.head;
      if (index > this.length - 1)
        throw new Error(
          `you can't add to ${index}, the linked list is has length of ${this.length}`
        );
      while (currentIndex !== index) {
        currentIndex++;
        currentNode = currentNode.next;
      }
      node.next = currentNode.next;
      currentNode.next = node;
      return this;
    } catch (error) {
      return error;
    }
  }
  removeHead() {
    try {
      if (this.head === null)
        throw new Error("the linked list is already empty");
      this.head = this.head.next;
    } catch (error) {
      return error;
    }
  }
  removeTail() {
    try {
      if (this.head === null)
        throw new Error("the linked list is already empty");
      let currentNode = this.head;
      if (currentNode.next === null) this.head = null;
      while (currentNode.next) {
        if (currentNode.next.next) currentNode = currentNode.next;
        else {
          currentNode.next = null;
        }
      }
      return this;
    } catch (error) {
      return error;
    }
  }
  removeIndex(index) {
    try {
      let currentIndex = 0;
      let currentNode = this.head;
      if (index > this.length - 1)
        throw new Error(
          `you can't add to ${index}, the linked list is has length of ${this.length}`
        );
      while (currentIndex + 1 !== index) {
        currentIndex++;
        currentNode = currentNode.next;
      }
      currentNode.next = currentNode.next.next;
      return this;
    } catch (error) {
      return error;
    }
  }
  setDataAtIndex(data, index) {
    try {
      if (index > this.length - 1)
        throw new Error(
          `you can't change data of index ${index}, the linked list has length ${this.length}`
        );
      let currentIndex = 0;
      let currentNode = this.head;
      while (currentIndex !== index) {
        currentIndex++;
        currentNode = currentNode.next;
      }
      currentNode.data = data;
      return this;
    } catch (error) {
      return error;
    }
  }
}
module.exports = LinkedList;
