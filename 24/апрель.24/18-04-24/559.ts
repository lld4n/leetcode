class Node {
  val: number;
  children: Node[];
  constructor(val?: number, children?: Node[]) {
    this.val = val === undefined ? 0 : val;
    this.children = children === undefined ? [] : children;
  }
}

function maxDepth(root: Node | null): number {
  if (root === null) return 0;
  let ans = 0;
  const dfs = (node: Node, d: number) => {
    ans = Math.max(ans, d);

    for (const n of node.children) {
      dfs(n, d + 1);
    }
  };
  dfs(root, 1);
  return ans;
}
