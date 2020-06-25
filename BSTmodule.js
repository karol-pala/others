const binarySearchTree = {
    root: null,
    node: function(data){
        return {
            data: data,
            left: null,
            right: null
        }
    },
    insert: function(data){
        const newNode = this.node(data);
        if(this.root===null){
            this.root = newNode
        } else {
            this.insertNode(this.root, newNode)
        }
    }, 
    insertNode: function(node, newNode){
        if(newNode.data < node.data){
            if(node.left === null){
                node.left = newNode;
            } else {
                this.insertNode(node.left, newNode)
            }
        } else {
            if(node.right === null){
                node.right = newNode;
            } else {
                this.insertNode(node.right, newNode)
            }
        }
    },
    remove: function(data){
        this.root = this.removeNode(this.root, data)
    },
    removeNode: function(node, key){
        if(node === null){
            return null;
        } else if(key < node.data) {
            node.left = this.removeNode(node.left, key);
            return node
        } else if(key > node.data){
            node.right = this.removeNode(node.right, key);
            return node;
        } else {
            if(node.left === null && node.right === null){
                node = null;
                return node;
            }
            if(node.left === null){
                node = node.right;
                return node;
            }
            else if(node.right === null){
                node = node.left;
                return node;
            }
            var aux = this.findMinNode(node.right);
            node.data = aux.data;
            node.right = this.removeNode(node.right, aux.data);
            return node
        }
    },
    inorder: function(node){
        if(node !== null){
            this.inorder(node.left);
            console.log(node.data);
            this.inorder(node.right);
        }
    },
    preorder: function(node){
        if(node !== null){
            console.log(node.data);
            this.preorder(node.left);
            this.preorder(node.right);
        }
    },
    postorder: function(node){
        if(node !== null){
            this.postorder(node.left);
            this.postorder(node.right);
            console.log(node.data);
        }
    }, 
    findMinNode: function(node){
        if(node.left === null){
            return node
        } else {
            return this.findMinNode(node.left)
        }
    },
    getRootNode: function(){
        return this.root;
    },
    search: function(node, data){
        if(node === null){
            return null;
        } else if(data < node.data){
            return this.search(node.left, data);
        } else if(data > node.data){
            return this.search(node.right, data);
        } else {
            return node
        }
    }
}


binarySearchTree.insert(9)
binarySearchTree.insert(1)
binarySearchTree.insert(22)
binarySearchTree.insert(12)
binarySearchTree.insert(19)
binarySearchTree.insert(21)
binarySearchTree.insert(2)
binarySearchTree.insert(7)

console.log("=========================================")
let root = binarySearchTree.getRootNode();
binarySearchTree.inorder(root);
console.log("=========================================")
binarySearchTree.remove(1);
root = binarySearchTree.getRootNode();
binarySearchTree.inorder(root);
console.log("=========================================")
console.log(binarySearchTree.search(root, 9))
console.log("=========================================")
binarySearchTree.preorder(root);
console.log("=========================================")
binarySearchTree.postorder(root);