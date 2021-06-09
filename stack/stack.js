class Stack {
    constructor() {
        this.items = {}
        this.top = -1
    }
    //this adds an element to the top of the stack
    set push(item) {
        this.top += 1
        this.items[this.top] = item
        return this.top
    }
    //return last element that pushed to the stack (top element)
    get pop() {
        try {
            if (this.top < 0) {
                throw new Error('the stack is empty')
            }
            else {
                let lastItem = this.items[this.top]
                this.top -= 1
                return lastItem
            }

        }
        catch (error) {
            return error
        }

    }
    //this will only show you what is on top in the stack it won't remove it from top
    get peek() {
        return this.items[this.top]
    }
}
module.exports = Stack