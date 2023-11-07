class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

function mergeTwoLists(
  list1: ListNode | null,
  list2: ListNode | null,
): ListNode | null {
  let list: ListNode[] = [];
  while (list1 !== null && list2 !== null) {
    if (list1.val > list2.val) {
      list.push(new ListNode(list2.val));
      list2 = list2.next;
    } else {
      list.push(new ListNode(list1.val));
      list1 = list1.next;
    }
  }

  while (list1 !== null) {
    list.push(new ListNode(list1.val));
    list1 = list1.next;
  }

  while (list2 !== null) {
    list.push(new ListNode(list2.val));
    list2 = list2.next;
  }

  for (let i = 0; i < list.length - 1; i++) {
    list[i].next = list[i + 1];
  }
  if (list.length === 0) return null;

  return list[0];
}
