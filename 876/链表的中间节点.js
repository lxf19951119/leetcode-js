/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var middleNode = function (head) {
  // 快慢指针初始化指向 head
  let slow = head,
    fast = head;
  // 快指针走到末尾时停止
  while (fast != null && fast.next != null) {
    // 慢指针走一步，快指针走两步
    slow = slow.next;
    fast = fast.next.next;
  }
  // 慢指针指向中点
  return slow;
};
