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

function evaluateTree(root: TreeNode | null): boolean {
  if (!root) return false;

  const dfs = (node: TreeNode | null) => {
    if (!node) return false;
    if (node.val === 0) return false;
    if (node.val === 1) return true;

    const left = dfs(node.left);
    const right = dfs(node.right);

    if (node.val === 2) {
      return left || right;
    } else {
      return left && right;
    }
  };

  return dfs(root);
}
