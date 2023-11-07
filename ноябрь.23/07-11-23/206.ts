// class ListNode {
//   val: number;
//   next: ListNode | null;
//   constructor(val?: number, next?: ListNode | null) {
//     this.val = val === undefined ? 0 : val;
//     this.next = next === undefined ? null : next;
//   }
// }
//
// function reverseList(head: ListNode | null): ListNode | null {
//   if (head === null) return null;
//   let list: ListNode[] = [];
//   while (head !== null) {
//     list.push(head);
//     head = head.next;
//   }
//   list.unshift(null);
//   list = list.reverse();
//   for (let i = 0; i < list.length - 1; i++) {
//     list[i].next = list[i + 1];
//   }
//   return list[0];
// }
