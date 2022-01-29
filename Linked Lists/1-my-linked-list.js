class MyLinkedList {
    constructor(value) {
        this.head = {
            value: value,
            next: null
        }
        this.tail = this.head;
        this.length = 1;
    }

    append(value) {
        const node = {
            value,
            next: null
        }

        this.tail.next = node;
        this.tail = node;
        this.length++;

        return this;
    }
}

const myLinkedList = new MyLinkedList(10);
myLinkedList.append(5);
myLinkedList.append(18);
console.log(myLinkedList);