class TreeNode {
  data: number;
  left: TreeNode | null = null;
  right: TreeNode | null = null;
  height: number = 1;

  constructor(data: number) {
    this.data = data;
  }
}

class AVLTree {
  root: TreeNode | null = null;

  getHeight(node: TreeNode | null): number {
    if (!node) return 0;
    return node.height;
  }

  getBalance(node: TreeNode | null): number {
    if (!node) return 0;
    return this.getHeight(node.left) - this.getHeight(node.right);
  }

  rightRotate(y: TreeNode): TreeNode {
    let x = y.left!;
    let T3 = x.right;

    x.right = y;
    y.left = T3;

    y.height =
      Math.max(this.getHeight(y.left), this.getHeight(y.right)) + 1;
    x.height =
      Math.max(this.getHeight(x.left), this.getHeight(x.right)) + 1;

    return x;
  }

  leftRotate(x: TreeNode): TreeNode {
    let y = x.right!;
    let T2 = y.left;

    y.left = x;
    x.right = T2;

    x.height =
      Math.max(this.getHeight(x.left), this.getHeight(x.right)) + 1;
    y.height =
      Math.max(this.getHeight(y.left), this.getHeight(y.right)) + 1;

    return y;
  }

  insert(node: TreeNode | null, data: number): TreeNode {
    if (!node) return new TreeNode(data);

    if (data < node.data) {
      node.left = this.insert(node.left, data);
    } else if (data > node.data) {
      node.right = this.insert(node.right, data);
    } else {
      return node;
    }

    node.height =
      1 +
      Math.max(this.getHeight(node.left), this.getHeight(node.right));

    let balance = this.getBalance(node);

    if (balance > 1 && data < node.left!.data) {
      return this.rightRotate(node);
    }
    if (balance < -1 && data > node.right!.data) {
      return this.leftRotate(node);
    }
    if (balance > 1 && data > node.left!.data) {
      node.left = this.leftRotate(node.left!);
      return this.rightRotate(node);
    }
    if (balance < -1 && data < node.right!.data) {
      node.right = this.rightRotate(node.right!);
      return this.leftRotate(node);
    }

    return node;
  }

  inOrder(node: TreeNode | null): void {
    if (node) {
      this.inOrder(node.left);
      console.log(node.data);
      this.inOrder(node.right);
    }
  }

  add(data: number): void {
    this.root = this.insert(this.root, data);
  }

  display(): void {
    this.inOrder(this.root);
  }

  find_min(i: number): number {
    let cur: TreeNode | null = this.root;
    let mm = -1;
    while (cur !== null) {
      if (cur.data >= i) {
        mm = cur.data;
        cur = cur.left;
      } else {
        cur = cur.right;
      }
    }
    return mm;
  }
}

const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let n: number;
let i = -1;
const tree = new AVLTree();
let y = 0;
rl.on("line", (line: string) => {
  if (i === -1) {
    n = Number(line);
  } else {
    if (line[0] === "+") {
      tree.add((Number(line.split(" ")[1]) + y) % 10 ** 9);
      y = 0;
    } else {
      y = tree.find_min(Number(line.split(" ")[1]));
      console.log(y);
    }
  }
  i++;
});
