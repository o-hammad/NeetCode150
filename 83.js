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
var deleteDuplicates = function (head) {
    let prev = null;
    let curr = head;
    let holder = head;

    // [1,1,2] curr
    //      [1,1,1]
    //       p   c
    while (curr) {
        let next = curr.next;
        if (prev && prev.val == curr.val) {
            prev.next = next;
            curr = next;
        } else {
            prev = curr;
            curr = next;
        }
    }

    return holder;
};

// having a previous and a current pointer
// if prev.val = curr.val, then remove current