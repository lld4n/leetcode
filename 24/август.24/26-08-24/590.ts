class _Node {
  val: number;
  children: _Node[];
  constructor(val?: number) {
    this.val = val === undefined ? 0 : val;
    this.children = [];
  }
}

function postorder(root: _Node | null): number[] {
  if (!root) return [];

  const stack = [root];
  const results = [];

  while (stack.length) {
    const currNode = stack.pop()!;

    if (currNode.children.length > 0) {
      stack.push(...currNode.children);
    }
    results.push(currNode.val);
  }

  return results.reverse();
}
