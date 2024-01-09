class TreeNode {
  val: number;
  left: TreeNode | null;
  right: TreeNode | null;
  constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
  }
}

function leafSimilar(root1: TreeNode | null, root2: TreeNode | null): boolean {
  if (root1 === null && root2 === null) return true;
  if (root1 === null || root2 === null) return false;

  const l1 = df(root1);
  const l2 = df(root2);
  if (l1.length !== l2.length) return false;
  let j = 0;
  for (let i = 0; i < l1.length; i++) {
    if (l1[i] !== l2[j]) {
      return false;
    }
    j++;
  }
  return true;
}

function df(root: TreeNode) {
  const list: number[] = [];
  const f = (node: TreeNode) => {
    if (node.left === null && node.right === null) {
      list.push(node.val);
      return;
    }

    if (node.left) {
      f(node.left);
    }
    if (node.right) {
      f(node.right);
    }
  };
  f(root);
  return list;
}
