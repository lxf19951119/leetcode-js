/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function (head, n) {
  let preNode = findNth(head, n + 1);
  let postNode = findNth(head, n - 1);
  preNode.next = postNode;
  return head;
};

var findNth = function (head, k) {
  let p1 = head;
  let p2 = head;
  for (let i = 0; i < k; i++) {
    p1 = p1.next;
  }
  while (p1 != null) {
    p1 = p1.next;
    p2 = p2.next;
  }
  return p2;
};
