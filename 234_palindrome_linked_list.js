/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */

// use fast and slow pointer system
// break the linked list into 2 linked lists
// reverse 2nd half of linked list
// iterate through both to see if they match

var isPalindrome = function (head) {
    let slow = head;
    let fast = head;

    while (fast && fast.next) {
        slow = slow.next;
        fast = fast.next.next;
    }

    fast = head;

    let reversed = reverse(slow);

    while (reversed) {
        if (reversed.val !== fast.val) {
            return false;
        }

        reversed = reversed.next;
        fast = fast.next;
    }

    return true;
};

var reverse = function (head) {
    let previous = null;

    while (head !== null) {
        let next = head.next;

        head.next = previous;
        previous = head;
        head = next;
    }

    return previous;
}