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

function diameterOfBinaryTree(root: TreeNode | null): number {
  let d = 0;

  const lp = (node: TreeNode | null) => {
    if (node === null) return 0;

    const l = lp(node.left);
    const r = lp(node.right);

    d = Math.max(d, l + r);

    return Math.max(l, r) + 1;
  };
  lp(root);
  return d;
}
