class Queue {
  constructor() {
    this.items = {};
    this.front = 0;
    this.rear = 0;
  }
  enqueue(data) {
    this.items[this.rear] = data;
    this.rear++;
    return this;
  }
  dequeue() {
    const item = this.items[this.front];
    delete this.items[this.front];
    this.front++;
    return item;
  }
  peak() {
    return this.items[this.front];
  }
  get size() {
    return this.rear - this.front;
  }
  isEmpty() {
    return this.front === this.rear;
  }
}
module.exports = Queue;
