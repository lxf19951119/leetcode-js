/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var reverseKGroup = function (head, k) {
  if (head == null) return null;
  let a = head;
  let b = head;
  for (let i = 0; i < k; i++) {
    //不足k个不用翻转
    if (b == null) return head;
    b = b.next;
  }
  let newHead = reverse(a, b);
  a.next = reverseKGroup(b, k);
  return newHead;
};

/**
 * @description 反转区间 [a, b) 的元素，注意左闭右开
 * @param {*} a
 * @param {*} b
 * @return {*}
 */
var reverse = function (a, b) {
  let pre = null;
  let cur = a;
  let nxt = a;
  while (cur != b) {
    nxt = cur.next;
    cur.next = pre;
    pre = cur;
    cur = nxt;
  }
  //返回翻转后的头节点
  return pre;
};
