class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

function addTwoNumbers(
  l1: ListNode | null,
  l2: ListNode | null,
): ListNode | null {
  let num1 = "";
  let num2 = "";
  while (l1 !== null) {
    num1 += l1.val;
    l1 = l1.next;
  }
  while (l2 !== null) {
    num2 += l2.val;
    l2 = l2.next;
  }

  let answer = String(Number(l1) + Number(l2));
  let start: ListNode = new ListNode(Number(answer[0]));
  let tail: ListNode = start;
  for (let i = 1; i < answer.length; i++) {
    tail.next = new ListNode(Number(answer[i]));
    tail = tail.next;
  }
  return start;
}
