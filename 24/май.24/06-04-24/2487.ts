class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

function removeNodes(head: ListNode | null): ListNode | null {
  if (head === null) return null;

  const reverse = (node: ListNode | null) => {
    let prev = null;
    while (node) {
      prev = new ListNode(node.val, prev);
      node = node.next;
    }
    return prev;
  };

  const reversed = reverse(head);

  let buffer = reversed;
  while (buffer !== null) {
    if (buffer.next) {
      if (buffer.val > buffer.next.val) {
        buffer.next = buffer.next.next;
      } else {
        buffer = buffer.next;
      }
    } else {
      buffer = null;
    }
  }

  return reverse(reversed);
}
