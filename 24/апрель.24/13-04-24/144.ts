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

function preorderTraversal(root: TreeNode | null): number[] {
  const ans: number[] = [];
  const dfs = (node: TreeNode | null) => {
    if (node === null) return;

    ans.push(node.val);
    dfs(node.left);
    dfs(node.right);
  };
  dfs(root);
  return ans;
}
