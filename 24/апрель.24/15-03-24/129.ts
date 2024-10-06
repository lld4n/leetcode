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

function sumNumbers(root: TreeNode | null): number {
  if (root === null) return 0;
  let ans = 0;
  const q: { node: TreeNode; n: string }[] = [
    { node: root, n: String(root.val) },
  ];
  while (q.length !== 0) {
    const top = q.shift()!;
    if (top.node.left === null && top.node.right === null) {
      ans += Number(top.n);
    } else {
      if (top.node.left)
        q.push({
          node: top.node.left,
          n: top.n + String(top.node.left.val),
        });

      if (top.node.right)
        q.push({
          node: top.node.right,
          n: top.n + String(top.node.right.val),
        });
    }
  }
  return ans;
}
