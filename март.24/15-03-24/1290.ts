class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

function getDecimalValue(head: ListNode | null): number {
  if (head === null) return 0;

  let ans: string = "";
  while (head !== null) {
    ans += head.val;
    head = head.next;
  }
  return parseInt(ans, 2);
}
