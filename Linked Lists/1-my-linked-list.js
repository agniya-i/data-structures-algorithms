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

    prepend(value) {
        const node = {
            value,
            next: this.head
        }

        this.head = node;
        this.length++;

        return this;
    }



    insert(index, value) {
        let currentNode = this.head;
        let newNode = {
            value,
            next: null
        }

        for (let i = 0; i <= index; i++) {
            if (i < index) {
                currentNode = currentNode.next;
            } else {
                const pointer = currentNode.next;
                currentNode.next = newNode;
                newNode.next = pointer;
            }
        }

    }

    delete(index) {
        //todo
    }

    print() {
        const array = [];

        let currentNode = this.head;

        while (currentNode !== null) {
            array.push(currentNode.value);
            currentNode = currentNode.next;
        }

        return array;

    }


}

const myLinkedList = new MyLinkedList(10);
myLinkedList.append(5);
myLinkedList.append(18);
myLinkedList.append(6);
myLinkedList.delete(2);
console.log(myLinkedList.print());
