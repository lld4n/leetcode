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

type Leaf = {
  s: string;
  n: TreeNode;
};

const alp = (i: number) => {
  const a = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
  ];
  return a[i].toLowerCase();
};

const lexic = (s1: string, s2: string) => {
  // if (s1.length < s2.length) return s1;
  // if (s2.length < s1.length) return s2;
  if (s1 < s2) return s1;
  else return s2;
};

function smallestFromLeaf(root: TreeNode | null): string {
  if (root === null) return "";
  let ans: string = "";
  const queue: Leaf[] = [{ s: alp(root.val), n: root }];
  while (queue.length > 0) {
    const top = queue.shift()!;
    if (top.n.left === null && top.n.right === null) {
      if (ans) {
        ans = lexic(ans, top.s);
      } else {
        ans = top.s;
      }
    } else {
      if (top.n.left) {
        queue.push({
          s: alp(top.n.left.val) + top.s,
          n: top.n.left,
        });
      }
      if (top.n.right) {
        queue.push({
          s: alp(top.n.right.val) + top.s,
          n: top.n.right,
        });
      }
    }
  }
  return ans;
}
