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
var isPalindrome = function (head) {
    let array = [];
    let transcribe = head;

    while (transcribe) {
        array.push(transcribe.val);
        transcribe = transcribe.next;
    }

    return Palindrome(array)
};

var Palindrome = function (array) {
    let left = 0;
    let right = array.length - 1;

    while (left < right) {
        if (array[left] !== array[right]) {
            return false
        }
        left++;
        right--;
    }

    return true;
}