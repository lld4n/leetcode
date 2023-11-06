/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

function averageOfSubtree(root: TreeNode | null): number {
  let ans = 0;
  const dfs = (r: TreeNode | null): [number, number] => {
    if (r === null) return [0, 0];
    const [lefVal, lefCount] = dfs(r.left);
    const [rigVal, rigCount] = dfs(r.right);
    if (
      Math.floor((lefVal + rigVal + r.val) / (lefCount + rigCount + 1)) ===
      r.val
    ) {
      ans++;
    }

    return [lefVal + rigVal + r.val, lefCount + rigCount + 1];
  };

  dfs(root);
  return ans;
}
