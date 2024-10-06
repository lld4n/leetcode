class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

function removeElements(
  head: ListNode | null,
  val: number,
): ListNode | null {
  if (head === null) return null;

  while (head && head.val === val) {
    head = head.next;
  }
  if (head === null) return null;
  let prev = head;
  let next = head.next;

  while (next !== null) {
    if (next.val === val) {
      prev.next = next.next;
      next = next.next;
    } else {
      prev = next;
      next = next.next;
    }
  }
  return head;
}
