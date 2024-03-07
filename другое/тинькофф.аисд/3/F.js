var TreeNode = /** @class */ (function () {
    function TreeNode(data) {
        this.left = null;
        this.right = null;
        this.height = 1;
        this.data = data;
    }
    return TreeNode;
}());
var AVLTree = /** @class */ (function () {
    function AVLTree() {
        this.root = null;
        this.map = {};
        this.max = -Infinity;
    }
    AVLTree.prototype.getHeight = function (node) {
        if (!node)
            return 0;
        return node.height;
    };
    AVLTree.prototype.getBalance = function (node) {
        if (!node)
            return 0;
        return this.getHeight(node.left) - this.getHeight(node.right);
    };
    AVLTree.prototype.rightRotate = function (y) {
        var x = y.left;
        var T3 = x.right;
        x.right = y;
        y.left = T3;
        y.height =
            Math.max(this.getHeight(y.left), this.getHeight(y.right)) + 1;
        x.height =
            Math.max(this.getHeight(x.left), this.getHeight(x.right)) + 1;
        return x;
    };
    AVLTree.prototype.leftRotate = function (x) {
        var y = x.right;
        var T2 = y.left;
        y.left = x;
        x.right = T2;
        x.height =
            Math.max(this.getHeight(x.left), this.getHeight(x.right)) + 1;
        y.height =
            Math.max(this.getHeight(y.left), this.getHeight(y.right)) + 1;
        return y;
    };
    AVLTree.prototype.insert = function (node, data) {
        if (!node)
            return new TreeNode(data);
        if (data < node.data) {
            node.left = this.insert(node.left, data);
        }
        else if (data > node.data) {
            node.right = this.insert(node.right, data);
        }
        else {
            return node;
        }
        node.height =
            1 +
                Math.max(this.getHeight(node.left), this.getHeight(node.right));
        var balance = this.getBalance(node);
        if (balance > 1 && data < node.left.data) {
            return this.rightRotate(node);
        }
        if (balance < -1 && data > node.right.data) {
            return this.leftRotate(node);
        }
        if (balance > 1 && data > node.left.data) {
            node.left = this.leftRotate(node.left);
            return this.rightRotate(node);
        }
        if (balance < -1 && data < node.right.data) {
            node.right = this.rightRotate(node.right);
            return this.leftRotate(node);
        }
        return node;
    };
    AVLTree.prototype.inOrder = function (node) {
        if (node) {
            this.inOrder(node.left);
            console.log(node.data);
            this.inOrder(node.right);
        }
    };
    AVLTree.prototype.add = function (data) {
        if (this.map[data] === undefined) {
            this.root = this.insert(this.root, data);
            this.map[data] = 1;
            if (data > this.max) {
                this.max = data;
            }
        }
    };
    AVLTree.prototype.display = function () {
        this.inOrder(this.root);
    };
    AVLTree.prototype.find_min = function (i) {
        if (i > this.max)
            return -1;
        var cur = this.root;
        var mm = -1;
        while (cur !== null) {
            if (cur.data >= i) {
                mm = cur.data;
                cur = cur.left;
            }
            else {
                cur = cur.right;
            }
        }
        return mm;
    };
    return AVLTree;
}());
var readline = require("readline");
var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});
var n;
var i = -1;
var tree = new AVLTree();
var y = 0;
rl.on("line", function (line) {
    if (i === -1) {
        n = Number(line);
    }
    else {
        if (line[0] === "+") {
            tree.add((Number(line.split(" ")[1]) + y) % Math.pow(10, 9));
            y = 0;
        }
        else {
            y = tree.find_min(Number(line.split(" ")[1]));
            console.log(y);
        }
    }
    i++;
    if (i === n) {
        rl.close();
    }
});
