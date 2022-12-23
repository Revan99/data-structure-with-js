const Stack = require("./stack");

describe("Stack test", () => {
  let stack;
  beforeEach(() => {
    stack = new Stack();
  });
  it("create empty stack", () => {
    expect(stack.top).toBe(-1);
    expect(stack.items).toEqual({});
  });

  it("push to the stack", () => {
    stack.push = "mongo";
    expect(stack.top).toBe(0);
    expect(stack.peek).toBe("mongo");
  });

  it("pop from stack", () => {
    stack.push = "banana";
    stack.push = "orange";
    stack.push = "watermelon";
    expect(stack.pop).toBe("watermelon");
    expect(stack.pop).toBe("orange");
    expect(stack.pop).toBe("banana");
  });

  it("peek at top of stack", () => {
    stack.push = "banana";
    stack.push = "orange";
    stack.push = "watermelon";
    expect(stack.peek).toBe("watermelon");
    expect(stack.peek).toBe("watermelon");
    expect(stack.peek).toBe("watermelon");
  });

  it("pop an empty stack", () => {
    try {
      stack.pop;
    } catch (error) {
      expect(error).toBe("the stack is empty");
    }
  });
});
