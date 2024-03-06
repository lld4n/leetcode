const n = 6;
const _root = 3;
const arr: [number, number][] = [
  [-1, -1],
  [0, 2],
  [-1, -1],
  [1, 4],
  [-1, 5],
  [-1, -1],
];

class TreeNode {
  value: number;
  left: TreeNode | null;
  right: TreeNode | null;
  constructor(value: number) {
    this.value = value;
    this.left = null;
    this.right = null;
  }

  sl(node: TreeNode) {
    this.left = node;
  }

  sr(node: TreeNode) {
    this.right = node;
  }
}

const nodes: TreeNode[] = [];
for (let i = 0; i < n; i++) {
  nodes.push(new TreeNode(i));
}

for (let i = 0; i < n; i++) {
  const [l, r] = arr[i];
  if (l !== -1) {
    nodes[i].sl(nodes[l]);
  }
  if (r !== -1) {
    nodes[i].sr(nodes[r]);
  }
}

const root = nodes[_root];
console.log(nodes);

const height: number[] = new Array(n).fill(0);

const dfs_h = (node: TreeNode | null) => {
  if (node === null) return 0;

  const lh = dfs_h(node.left);
  const rh = dfs_h(node.right);

  height[node.value] = Math.max(lh, rh) + 1;
  return height[node.value];
};

const dfs_v = (node: TreeNode | null, minv: number, maxv: number) => {
  if (node === null) return true;

  if (node.value <= minv && node.value >= maxv) {
    return false;
  }
  return (
    dfs_v(node.left, minv, node.value) &&
    dfs_v(node.right, node.value, maxv)
  );
};

console.log(dfs_v(root, -Infinity, Infinity));
