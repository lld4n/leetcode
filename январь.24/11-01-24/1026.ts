function maxAncestorDiff(
  root: TreeNode | null,
  maxAncestor = 0,
  minAncestor = Infinity,
): number {
  if (root == null) {
    return 0;
  }

  maxAncestor = Math.max(maxAncestor, root.val);
  minAncestor = Math.min(minAncestor, root.val);

  if (!root.left && !root.right) {
    return Math.abs(maxAncestor - minAncestor);
  }

  return Math.max(
    maxAncestorDiff(root.left, maxAncestor, minAncestor),
    maxAncestorDiff(root.right, maxAncestor, minAncestor),
  );
}
