// type TreeNode = {
//   val: number;
//   left: TreeNode | null;
//   right: TreeNode | null;
// };
//
// function levelOrderBottom(root: TreeNode | null): number[][] {
//   let result: number[][] = [];
//   const func = (r: TreeNode | null, level: number) => {
//     if (r === null) return;
//
//     if (result[level]) {
//       result[level].push(r.val);
//     } else {
//       result[level] = [r.val];
//     }
//
//     func(r.left, level + 1);
//     func(r.right, level + 1);
//   };
//   func(root, 0);
//
//   return result.reverse();
// }
