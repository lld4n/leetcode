// class TreeNode {
//   val: number;
//   left: TreeNode | null;
//   right: TreeNode | null;
//   constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
//     this.val = val === undefined ? 0 : val;
//     this.left = left === undefined ? null : left;
//     this.right = right === undefined ? null : right;
//   }
// }

function treeQueries(root: TreeNode | null, queries: number[]): number[] {
  let lr: {
    [key: number]: [number, number];
  } = {};
  const dirst = (r: TreeNode | null, level = 0) => {
    const lef = r.left ? dirst(r.left, level + 1) : level;
    const rig = r.right ? dirst(r.right, level + 1) : level;

    lr[r.val] = [lef, rig];
    return Math.max(lef, rig);
  };
  let map: {
    [key: number]: number;
  } = {};
  const second = (r: TreeNode | null, level: number) => {
    if (r.left) {
      const mm = Math.max(lr[r.val][1], level);
      map[r.val] = mm;
      second(r.right, mm);
    }
    if (r.right) {
      const mm = Math.max(lr[r.val][0], level);
      map[r.val] = mm;
      second(r.left, mm);
    }
  };

  dirst(root);
  second(root, -1);

  return queries.map((el) => map[el]);
}
