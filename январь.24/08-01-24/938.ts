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

function rangeSumBST(root: TreeNode | null, low: number, high: number): number {
  let answer = 0;

  const dfs = (root: TreeNode | null) => {
    if (root === null) {
      return;
    }

    if (low <= root.val && root.val <= high) {
      answer += root.val;
    }
    dfs(root.left);
    dfs(root.right);
  };
  dfs(root);
  return answer;
}
