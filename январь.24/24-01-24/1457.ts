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

function pseudoPalindromicPaths(root: TreeNode | null): number {
  const numberCount = new Array(9).fill(0);
  let res = 0;

  function dfs(node: TreeNode | null) {
    if (!node) {
      return;
    }
    let index = node.val - 1;
    numberCount[index]++;

    if (node.left || node.right) {
      if (node.left) {
        dfs(node.left);
      }
      if (node.right) {
        dfs(node.right);
      }
    } else {
      const isPseudo = isPseudoPalindrome(numberCount);
      if (isPseudo) {
        res++;
      }
    }
    numberCount[index]--;
  }
  dfs(root);
  return res;
}

function isPseudoPalindrome(arr: number[]) {
  if (arr.length == 0) {
    return false;
  }
  let oddCount = 0;
  for (const elem of arr) {
    if (elem % 2 == 1) {
      oddCount++;
    }
    if (oddCount > 1) {
      return false;
    }
  }
  return true;
}
