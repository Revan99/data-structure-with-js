const LinkedList = require("./linkedList");
const Node = require("./linkedListNode");

describe("testing linkedList", () => {
  let ll;
  beforeEach(() => {
    ll = new LinkedList();
  });
  afterEach(() => {
    ll = null;
  });
  it("should have be able to add to the beginning", () => {
    ll.addToStart(new Node(1));
    ll.addToStart(new Node(3));
    ll.addToStart(new Node(5));
    expect(ll.showFirst).toBe(5);
  });
  it("should have be able to add to the end", () => {
    ll.addToEnd(new Node(1));
    ll.addToEnd(new Node(2));
    ll.addToEnd(new Node(3));
    expect(ll.showLast).toBe(3);
  });
  it("should add to end if there is multiple nodes", () => {
    ll.addToStart(new Node(1));
    ll.addToStart(new Node(2));
    ll.addToStart(new Node(3));
    ll.addToEnd(new Node(4));
    expect(ll.length).toBe(4);
  });
  it("should has length of one", () => {
    ll.addToStart(new Node(1));
    expect(ll.length).toBe(1);
  });
  it("should has length of zero", () => {
    expect(ll.length).toBe(0);
  });
  it("should have be able to add at index", () => {
    ll.addToStart(new Node(1));
    ll.addToStart(new Node(1));
    ll.addTo(1, new Node(3));
    expect(ll.showLast).toBe(3);
  });
  it("should throw an error if you add to an index greater than length", () => {
    try {
      ll.addToStart(new Node(1));
      ll.addToStart(new Node(1));
      ll.addToStart(new Node(1));
      ll.addTo(5, new Node(3));
    } catch (error) {
      expect(error).toBe(
        `you can't add to ${5}, the linked list is has length of ${3}`
      );
    }
  });
  it("should have be able to remove head", () => {
    ll.addToStart(new Node(2));
    ll.addToStart(new Node(3));
    ll.addToStart(new Node(4));
    ll.removeHead();
    expect(ll.head.data).toBe(3);
  });
  it("should throw an error if linked list was empty", () => {
    try {
      ll.removeHead();
    } catch (error) {
      expect(error).toBe("the linked list is already empty");
    }
  });
  it("should have be able to remove tail", () => {
    ll.addToStart(new Node(2));
    ll.addToStart(new Node(7));
    ll.addToStart(new Node(4));
    ll.removeTail();
    expect(ll.showLast).toBe(7);
  });
  it("should have be able to remove the only element", () => {
    ll.addToStart(new Node(2));
    ll.removeTail();
    expect(ll.length).toBe(0);
  });
  it("should throw an error if linked list was empty", () => {
    try {
      ll.removeTail();
    } catch (error) {
      expect(error).toBe("the linked list is already empty");
    }
  });
  it("should have be able to return data at index", () => {
    ll.addToStart(new Node(1));
    ll.addToStart(new Node(6));
    ll.addToEnd(new Node(4));
    ll.addToEnd(new Node(8));
    expect(ll.dataAt(1)).toBe(1);
    expect(ll.dataAt(2)).toBe(4);
    expect(ll.dataAt(0)).toBe(6);
    expect(ll.dataAt(3)).toBe(8);
  });
  it("should throw an error if the list was empty while accessing by index", () => {
    try {
      ll.dataAt(1);
    } catch (error) {
      expect(error).toBe("the Linked list is empty");
    }
  });
  it("should throw an error if you add to an index greater than length", () => {
    try {
      ll.addToStart(new Node(1));
      ll.addToStart(new Node(1));
      ll.addToStart(new Node(1));
      ll.dataAt(5, new Node(3));
    } catch (error) {
      expect(error).toBe(
        `you can't read from ${5}, the linked list is has length of ${3}`
      );
    }
  });
  it("should have be able to remove at index", () => {
    ll.addToStart(new Node(1));
    ll.addToStart(new Node(6));
    ll.addToEnd(new Node(4));
    ll.addToEnd(new Node(8));
    ll.removeIndex(2);
    expect(ll.dataAt(0)).toBe(6);
    expect(ll.dataAt(1)).toBe(1);
    expect(ll.dataAt(2)).toBe(8);
  });
  it("should throw an error if the list was empty while accessing by index", () => {
    try {
      ll.removeIndex(1);
    } catch (error) {
      expect(error).toBe("the Linked list is empty");
    }
  });
  it("should throw an error if you add to an index greater than length", () => {
    try {
      ll.addToStart(new Node(1));
      ll.addToStart(new Node(1));
      ll.addToStart(new Node(1));
      ll.removeIndex(5);
    } catch (error) {
      expect(error).toBe(
        `you can't read from ${5}, the linked list is has length of ${3}`
      );
    }
  });

  it("should throw and error while trying to change the data of empty linked list", () => {
    try {
      ll.setDataAtIndex(5, 1);
    } catch (error) {
      expect(error).toBe(
        `you can't change data of index ${3}, the linked list has length ${0}`
      );
    }
  });
  it("should change the data of selected index", () => {
    ll.addToStart(new Node(1));
    ll.addToStart(new Node(1));
    ll.addToStart(new Node(1));
    ll.setDataAtIndex(5, 1);
    expect(ll.dataAt(1)).toBe(5);
  });
});
