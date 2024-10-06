class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

function isPalindrome(head: ListNode | null): boolean {
  if (head === null) return true;
  let slow: ListNode | null = head;
  let i = 0;
  let fast: ListNode | null = head.next ? head.next.next : null;
  while (fast !== null) {
    slow = slow!.next;
    i++;
    fast = fast.next ? fast.next.next : null;
  }
  slow = slow!.next;

  let med = slow;
  let prev: ListNode | null = null;
  while (med !== null) {
    const next = med.next;
    med.next = prev;
    prev = med;
    if (next === null) break;
    med = next;
  }

  while (med !== null && head !== null) {
    if (med.val !== head.val) return false;
    med = med.next;
    head = head.next;
  }
  return true;
}
