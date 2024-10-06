class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

function deleteDuplicates(head: ListNode | null): ListNode | null {
  if (head === null) return null;
  let cur = head;
  let next = head.next;
  const set: Set<number> = new Set([head.val]);
  while (next !== null) {
    if (set.has(next.val)) {
      cur.next = next.next;
      next = next.next;
    } else {
      set.add(next.val);
      cur = next;
      next = next.next;
    }
  }
  return head;
}
