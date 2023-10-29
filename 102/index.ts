type TreeNode = {
  val: number;
  left: TreeNode | null;
  right: TreeNode | null;
};
function levelOrder(root: TreeNode | null): number[][] {
  if (!root) return [];
  let result: number[][] = [];
  let b: TreeNode[] = [root];
  while (b.length !== 0) {
    result.push(b.map((el) => el.val));
    b = getRoots(b);
  }
  return result;
}

function getRoots(roots: TreeNode[]) {
  let buffer: TreeNode[] = [];
  for (let i = 0; i < roots.length; i++) {
    if (roots[i].left) {
      buffer.push(roots[i].left);
    }
    if (roots[i].right) {
      buffer.push(roots[i].right);
    }
  }
  return buffer;
}
