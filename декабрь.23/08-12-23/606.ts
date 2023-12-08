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

function tree2str(root: TreeNode | null): string {
  if (root === null) return "";
  let answer = "";
  answer += root.val;

  const dfs = (node: TreeNode | null): string => {
    if (node === null) return "";
    let ans = "" + node.val;
    if (node.left) {
      ans += "(" + dfs(node.left) + ")";
    }
    if (node.left === null && node.right) {
      ans += "(" + dfs(node.left) + ")";
    }
    if (node.right) {
      ans += "(" + dfs(node.right) + ")";
    }
    return ans;
  };
  if (root.left) {
    answer += "(" + dfs(root.left) + ")";
  }
  if (root.left === null && root.right) {
    answer += "(" + dfs(root.left) + ")";
  }
  if (root.right) {
    answer += "(" + dfs(root.right) + ")";
  }
  return answer;
}
