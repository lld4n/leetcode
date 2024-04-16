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

function addOneRow(
  root: TreeNode | null,
  val: number,
  depth: number,
): TreeNode | null {
  if (root === null) return new TreeNode(val);
  if (depth === 1) {
    const node = new TreeNode(val);
    node.left = root;
    return node;
  }

  const bfs = (node: TreeNode | null, d: number) => {
    if (node === null) return;

    if (d + 1 === depth) {
      let buffer = new TreeNode(val);
      const l = node.left;
      node.left = buffer;
      buffer.left = l;
      buffer = new TreeNode(val);
      const r = node.right;
      node.right = buffer;
      buffer.right = r;
    } else {
      bfs(node.left, d + 1);
      bfs(node.right, d + 1);
    }
  };
  bfs(root, 1);
  return root;
}
