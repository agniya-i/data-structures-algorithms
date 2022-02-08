class Node {

    constructor(value) {
        this.value = value;
        this.right = null;
        this.left = null;

    }
}


class BinarySearchTree {
    constructor() {
        this.root = null;
    }

    insert(value) {
        const newNode = new Node(value);

        if (this.root === null) {
            this.root = newNode;
            return;
        }

        let currentNode = this.root;

        while (currentNode) {

            if (newNode.value < currentNode.value) {
                if (!currentNode.left) {
                    currentNode.left = newNode;
                    return this;
                }

                currentNode = currentNode.left;
            } else {

                if (!currentNode.right) {
                    currentNode.right = newNode;

                    return this;
                }

                currentNode = currentNode.right;
            }
        }

        return this;
    }

    injectSearchMethod(fn) {
        this[fn.name] = fn.bind(this);
    }


    traverseRecursiveBFS(queue, list) {
        console.log(queue);
        if (!queue.length) return list;

        let currentNode = queue.shift();
        list.push(currentNode.value);

        if (currentNode.left) queue.push(currentNode.left);
        if (currentNode.right) queue.push(currentNode.right);

        return this.traverseRecursiveBFS(queue, list);
    }
}


// const bfsDriver = function () { };


function traverseBFS() {
    let currentNode = this.root;
    const list = [];
    const queue = [];

    queue.push(currentNode); // add to queue our first number

    while (queue.length > 0) {
        currentNode = queue.shift();  // set current node to 1 element from queue
        list.push(currentNode.value);

        if (currentNode.left) {
            queue.push(currentNode.left);
        }

        if (currentNode.right) {
            queue.push(currentNode.right);
        }
    }

    return list;
}

const myBinarySearchTree = new BinarySearchTree();
myBinarySearchTree.injectSearchMethod(traverseBFS);
myBinarySearchTree.insert(9);
myBinarySearchTree.insert(4);
myBinarySearchTree.insert(6);
myBinarySearchTree.insert(20);
myBinarySearchTree.insert(170);
myBinarySearchTree.insert(15);
myBinarySearchTree.insert(1);

console.log(myBinarySearchTree.traverseBFS(null, 'preorder'));

//console.log(myBinarySearchTree.traverseRecursiveBFS([myBinarySearchTree.root], []));