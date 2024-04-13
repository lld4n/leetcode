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

function isBalanced(root: TreeNode | null): boolean {
  let ans = true;
  const dfs = (node: TreeNode | null): number => {
    if (node === null) return 0;

    const l = dfs(node.left);
    const r = dfs(node.right);

    if (Math.abs(l - r) > 1) {
      ans = false;
    }

    return 1 + Math.max(l, r);
  };

  dfs(root);
  return ans;
}
