// class Node {
//   val: number;
//   left: Node | null;
//   right: Node | null;
//   next: Node | null;
//   constructor(val?: number, left?: Node, right?: Node, next?: Node) {
//     this.val = val === undefined ? 0 : val;
//     this.left = left === undefined ? null : left;
//     this.right = right === undefined ? null : right;
//     this.next = next === undefined ? null : next;
//   }
// }

// function connect(root: Node | null): Node | null {
//   let buffer: Node[][] = [];
//
//   const func = (r: Node | null, level: number) => {
//     if (r === null) return;
//
//     if (buffer[level]) {
//       buffer[level].push(r);
//     } else {
//       buffer[level] = [r];
//     }
//     func(root.left, level + 1);
//     func(root.right, level + 1);
//   };
//   func(root, 0);
//   for (let el of buffer) {
//     for (let i = 0; i < el.length - 1; i++) {
//       el[i].next = el[i + 1];
//     }
//   }
//   return root;
// }
