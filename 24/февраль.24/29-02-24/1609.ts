class TreeNode {
  val: number;
  left: TreeNode | null;
  right: TreeNode | null;
  constructor(
    val?: number,
    left?: TreeNode | null,
    right?: TreeNode | null,
  ) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
  }
}

function isEvenOddTree(root: TreeNode | null): boolean {
  if (root === null) return true;
  let list: TreeNode[] = [root];
  if (root.val % 2 === 0) return false;
  let i = 0;
  while (list.length !== 0) {
    i++;
    const b: TreeNode[] = [];
    for (const n of list) {
      if (n.left) {
        b.push(n.left);
      }
      if (n.right) {
        b.push(n.right);
      }
    }
    if (i % 2 === 0) {
      if (!b.every((e) => e.val % 2 !== 0)) return false;
      for (let j = 0; j < b.length - 1; j++) {
        if (b[j].val >= b[j + 1].val) return false;
      }
    } else {
      if (!b.every((e) => e.val % 2 === 0)) return false;
      for (let j = 0; j < b.length - 1; j++) {
        if (b[j].val <= b[j + 1].val) return false;
      }
    }
    list = b;
  }
  return true;
}
