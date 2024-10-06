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

function sortedArrayToBST(nums: number[]): TreeNode | null {
  if (nums.length === 0) return null;

  const med = Math.floor((nums.length - 1) / 2);
  return new TreeNode(
    nums[med],
    sortedArrayToBST(nums.slice(0, med)),
    sortedArrayToBST(nums.slice(med + 1)),
  );
}
