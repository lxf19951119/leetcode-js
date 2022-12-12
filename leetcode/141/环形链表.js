/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function (head) {
  let fast = head;
  let slow = head;
  while (fast && fast.next) {
    fast = fast.next.next;
    slow = slow.next;
    if (fast === slow) {
      return true;
    }
  }
  return false;
  // const hashMap = new Map();
  // while (head) {
  //   if (hashMap.has(head)) {
  //     return true;
  //   }
  //   hashMap.set(head, 1);
  //   head = head.next;
  // }
  // return false;
};
