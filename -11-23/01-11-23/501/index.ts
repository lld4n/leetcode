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

function findMode(root: TreeNode | null): number[] {
  const map = new Map<number, number>();

  const rec = (r: TreeNode | null) => {
    if (r === null) return;

    if (map.has(r.val)) {
      map.set(r.val, map.get(r.val) + 1);
    } else {
      map.set(r.val, 1);
    }
    rec(r.right);
    rec(r.left);
  };

  rec(root);

  let ms: number[] = [];
  const buffer = Array.from(map.values());
  const mxvalue = Math.max(...buffer);
  for (let el of Array.from(map.keys())) {
    if (map.get(el) === mxvalue) {
      ms.push(el);
    }
  }
  return ms;
}
