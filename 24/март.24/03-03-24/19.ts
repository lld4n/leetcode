class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

function removeNthFromEnd(
  head: ListNode | null,
  n: number,
): ListNode | null {
  if (head === null) return head;

  const list: ListNode[] = [head];
  while (list[list.length - 1].next !== null) {
    list.push(list[list.length - 1].next!);
  }
  if (list.length === 1) return null;
  if (list.length === n) return head.next;
  if (n === 1) {
    list[list.length - 2].next = null;
  } else {
    const revList = list.reverse();
    const f = revList[n - 2];
    const l = revList[n];
    l.next = f;
  }

  return head;
}
