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
    let dummy = new ListNode(null, head) // sentinel
    let length = 0;
    let targetNode = 0;
    let tempHead = head;
    let tempHead2 = dummy;

    while (tempHead) {
        length++;
        tempHead = tempHead.next;
    }

    targetNode = length - n;

    while (targetNode) {
        targetNode--;
        tempHead2 = tempHead2.next;
    }

    tempHead2.next = tempHead2.next.next;
    // [1,2] 2 -> [null,2] -> [2]
    return dummy.next;
}