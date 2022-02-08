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

    preOrder(node, callback, list) {
        if (!node) return;

        if (callback) callback(node);
        list.push(node.value)

        this.preOrder(node.left, callback, list);
        this.preOrder(node.right, callback, list);

        console.log(list);
        return list;
    }

    preOrderIterative(cb) {
        const stack = [];
        const list = [];

        stack.push(this.root);

        while (stack.length > 0) {
            let currentNode = stack.pop();
            if (cb) cb(currentNode);
            list.push(currentNode.value);
            if (currentNode.right) stack.push(currentNode.right);
            if (currentNode.left) stack.push(currentNode.left);
        }

        return list;
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
                return this.preOrder(this.root, null, []);
            case 'preorder-iterative':
                return this.preOrderIterative(callback);
            case 'inorder':
                return this.inOrder(this.root, callback);
            case 'postorder':
                return this.postOrder(this.root, callback);
            default:
                break;
        }
    }

    validateTree(node, left, right) {
        if (!node) return true;
        if (node.value < right && node.value > left) return false;

        return (valid(node.left, left, node.value) && valid(node.right, node.value, right));

    }

}


const myBinaryTree = new BinaryTree();
myBinaryTree.insert(6);
myBinaryTree.insert(4);
myBinaryTree.insert(11);
myBinaryTree.insert(2);
myBinaryTree.insert(5);
myBinaryTree.insert(7);
myBinaryTree.insert(20);
// myBinaryTree.insert(1);
// myBinaryTree.insert(3);
//console.log(myBinaryTree.traverseDFS((node) => { console.log(node.value) }, 'preorder'));

//const 
//console.log(myBinaryTree.preOrderIterative((node) => { console.log(node.value) }));