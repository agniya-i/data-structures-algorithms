class Node {

    constructor(value) {
        this.value = value;
        this.right = null;
        this.left = null;

    }
}

class BinaryTree {
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


    lookup(value) {
        if (!this.root) {
            return false;
        }

        let currentNode = this.root;
        while (currentNode) {
            if (value < currentNode.value) {
                currentNode = currentNode.left;
            } else if (value > currentNode.value) {
                currentNode = currentNode.right;
            } else if (value === currentNode.value) {
                console.log(currentNode);
                return currentNode;
            }
        }

        return false;
    }

    remove(value) {
        let currentNode = this.root;
        let parentNode = null;

        while (currentNode) {
            if (value < currentNode.value) {
                parentNode = currentNode;
                currentNode = currentNode.left;
            } else if (value > currentNode.value) {
                parentNode = currentNode;
                currentNode = currentNode.right;
            } else if (value === currentNode.value) {
                //todo
            }

        }

        return this;
    }

    preOrder(node, callback) {
        if (!node) return;


        if (callback) callback(node);


        this.preOrder(node.left, callback);
        this.preOrder(node.right, callback);


    }
    inOrder(node, callback) {
        if (!node) return;

        this.inOrder(node.left, callback);
        if (callback) callback(node);
        this.inOrder(node.right, callback);

    }
    postOrder(node, callback) {
        if (!node) return;

        this.inOrder(node.left, callback);
        this.inOrder(node.right, callback);
        if (callback) callback(node);
    }
    //в глубину 
    traverseDFS(callback, method) {
        switch (method) {
            case 'preorder':
                return this.preOrder(this.root, callback);
            case 'inorder':
                return this.inOrder(this.root, callback);
            case 'postorder':
                return this.postOrder(this.root, callback);
            default:
                break;
        }
    }

    traverseBFS(callback) {
        const queue = [this.root];

        while (queue.length) {
            const node = queue.shift();

            callback(node);

            if (node.left) {
                queue.push(node.left);
            }

            if (node.right) {
                queue.push(node.right);
            }


        }

    }
}


const myBinaryTree = new BinaryTree();
myBinaryTree.insert(9);
myBinaryTree.insert(4);
myBinaryTree.insert(20);
myBinaryTree.insert(21);
myBinaryTree.insert(15);

myBinaryTree.traverseDFS((node) => {
    console.log(node.value)
}, 'postorder');
