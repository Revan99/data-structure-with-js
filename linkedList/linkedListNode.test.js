const Node = require("./linkedListNode");
describe("testing the node", () => {
  let node1, node2;
  beforeEach(() => {
    node1 = new Node(1);
    node2 = new Node(2, node1);
  });

  it("should have data", () => {
    expect(node1.data).not.toBe(null);
  });
  it("should next node", () => {
    expect(node2.next.data).toBe(node1.data);
  });
});
