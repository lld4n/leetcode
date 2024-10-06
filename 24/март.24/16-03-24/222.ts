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

function countNodes(root: TreeNode | null): number {
  if (root === null) return 0;
  let ans = 0;
  const dfs = (node: TreeNode | null) => {
    if (node === null) return;
    ans++;
    dfs(node.left);
    dfs(node.right);
  };
  dfs(root);
  return ans;
}
