
class Stack {
    constructor() {
        this.array = [];
    }

    peek() {
        return this.array[this.array.length - 1];
    }

    push() {
        this.array.push(value);
        return this;
    }

    pop() {
        this.array.pop(value);
        return this;
    }
}