class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

function getIntersectionNode(
  headA: ListNode | null,
  headB: ListNode | null,
): ListNode | null {
  let m = 0;
  let n = 0;
  let a = headA;
  let b = headB;
  while (a !== null) {
    m++;
    a = a.next;
  }
  while (b !== null) {
    n++;
    b = b.next;
  }
  if (a !== b) return null;
  a = headA;
  b = headB;
  while (n !== m) {
    if (n > m) {
      n--;
      b = b!.next;
    } else {
      m--;
      a = a!.next;
    }
  }

  while (a !== null && b !== null) {
    if (a === b) return a;
    a = a.next;
    b = b.next;
  }
  return null;
}
