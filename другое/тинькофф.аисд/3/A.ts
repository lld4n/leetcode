const n: number = 7;
const lst: number[] = [0, 0, 1, 1, 1, 2];

class TreeNode {
  children: TreeNode[];
  constructor() {
    this.children = [];
  }
  add(item: TreeNode) {
    this.children.push(item);
  }
}

const depth = new Array(10 ** 5 + 1).fill(-1);
const nodes: (TreeNode | null)[] = new Array(10 ** 5 + 1).fill(null);
depth[0] = 0;
nodes[0] = new TreeNode();

for (let i = 0; i < lst.length; i++) {
  depth[i + 1] = depth[lst[i]] + 1;
  nodes[i + 1] = new TreeNode();
  nodes[lst[i]]!.add(nodes[i + 1]!);
}

console.log(depth.slice(0, n).join(""));

let ans = 0;

function dfs(root: TreeNode | null) {
  if (root === null) return 0;
  let m1 = 0;
  let m2 = 0;
  for (const child of root.children) {
    let t = dfs(child);
    if (t > m1) {
      [m2, m1] = [m1, t];
    } else if (t > m2) {
      m2 = t;
    }
  }
  ans = Math.max(ans, m1 + m2);
  return 1 + m1;
}
dfs(nodes[0]);
console.log(ans);

// class Solution:
//     def diameter(self, root: 'Node') -> int:
//         """
//         :type root: 'Node'
//         :rtype: int
//         """

//         def dfs(root):
//             if root is None:
//                 return 0
//             nonlocal ans
//             m1 = m2 = 0
//             for child in root.children:
//                 t = dfs(child)
//                 if t > m1:
//                     m2, m1 = m1, t
//                 elif t > m2:
//                     m2 = t
//             ans = max(ans, m1 + m2)
//             return 1 + m1

//         ans = 0
//         dfs(root)
//         return ans
