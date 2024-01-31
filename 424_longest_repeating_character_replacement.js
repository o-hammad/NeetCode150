/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */

// sliding window approach
// set left and right pointers
// use while loop to iterate until right reaches end of string
// keep track of different letters and compare to k
// if different letters < k, move right of window

const characterReplacement = (s, k) => {
    let left = 0;
    let right = 0;
    let maxCharCount = 0;
    const visited = {};

    while (right < s.length) {
        const char = s[right];
        visited[char] = visited[char] ? visited[char] + 1 : 1;

        if (visited[char] > maxCharCount) maxCharCount = visited[char];

        if (right - left + 1 - maxCharCount > k) {
            visited[s[left]]--;
            left++;
        }

        right++;
    }

    return right - left;
};