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

function isSameTree(p: TreeNode | null, q: TreeNode | null): boolean {
  if (p === null && q === null) return true;
  if (p === null) return false;
  if (q === null) return false;

  const dfs = (i: TreeNode | null, j: TreeNode | null) => {
    if (i === null && j === null) return true;
    if (i === null) return false;
    if (j === null) return false;

    if (i.val === j.val) {
      return dfs(i.left, j.left) && dfs(i.right, j.right);
    } else {
      return false;
    }
  };

  return dfs(p, q);
}
