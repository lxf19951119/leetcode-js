function ListNode(val, next) {
  this.val = val;
  this.next = next;
}

//分隔链表
var partition = function (head, x) {
  let small = new ListNode(0);
  let large = new ListNode(0);
  const smallHead = small;
  const largeHead = large;
  while (head !== null) {
    if (head.val < x) {
      small.next = head;
      small = small.next;
    } else {
      large.next = head;
      large = large.next;
    }
    head = head.next;
  }
  small.next = largeHead.next;
  return smallHead.next;
};
