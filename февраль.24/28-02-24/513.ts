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
function findBottomLeftValue(root: TreeNode | null): number {
  if (root === null) return 0;
  let b: TreeNode[] = [root];
  let a: TreeNode[] = [];

  while (true) {
    for (const node of b) {
      if (node?.left) {
        a.push(node.left);
      }
      if (node.right) {
        a.push(node.right);
      }
    }
    if (a.length === 0) {
      return b[0].val;
    } else {
      b = [...a];
      a = [];
    }
  }
}
