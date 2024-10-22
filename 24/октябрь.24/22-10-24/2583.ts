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

function kthLargestLevelSum(
  root: TreeNode | null,
  k: number,
): number {
  if (root === null) {
    return -1;
  }

  const stack: { level: number; root: TreeNode }[] = [
    { root, level: 0 },
  ];

  const map: { [key: number]: number } = { [0]: 0 };

  while (stack.length > 0) {
    const p = stack.shift()!;

    map[p.level] = map[p.level]
      ? map[p.level] + p.root.val
      : p.root.val;

    if (p.root.left) {
      stack.push({ root: p.root.left, level: p.level + 1 });
    }

    if (p.root.right) {
      stack.push({ root: p.root.right, level: p.level + 1 });
    }
  }

  const val = Object.values(map).sort((a, b) => b - a);

  if (val.length < k) {
    return -1;
  }

  return val[k - 1];
}
