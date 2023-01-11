const Queue = require("./queue");

describe("testing queue", () => {
  let queue;
  beforeEach(() => {
    queue = new Queue();
  });
  it("should contain nothing", () => {
    expect(queue.front).toBe(0);
    expect(queue.rear).toBe(0);
  });
  it("should be able to add to the queue", () => {
    queue.enqueue("hello");
    expect(queue.rear).toBe(1);
  });
  it("should be able to remove from queue", () => {
    queue.enqueue("hello");
    queue.enqueue("world");
    queue.dequeue();
    expect(queue.peak()).toBe("world");
    queue.dequeue();
    queue.enqueue("hello");
    expect(queue.peak()).toBe("hello");
  });
  it("should be able to get queue size", () => {
    queue.enqueue("hello");
    queue.enqueue("world");
    expect(queue.size).toBe(2);
    queue.dequeue();
    expect(queue.size).toBe(1);
    queue.dequeue();
    expect(queue.size).toBe(0);
    queue.enqueue("hello");
    expect(queue.size).toBe(1);
  });
  it("should be able to check it it's empty", () => {
    queue.enqueue("hello");
    queue.enqueue("world");
    expect(queue.isEmpty()).toBe(false);
    queue.dequeue();
    queue.dequeue();
    expect(queue.isEmpty()).toBe(true);
    queue.enqueue("world");
    expect(queue.isEmpty()).toBe(false);
    queue.enqueue("world");
    queue.dequeue();
    expect(queue.isEmpty()).toBe(false);
    queue.dequeue();
    expect(queue.isEmpty()).toBe(true);
  });
  it("should be able to peak the data", () => {
    queue.enqueue("hello");
    queue.enqueue("world");
    expect(queue.peak()).toBe("hello");
  });
});
