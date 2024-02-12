/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */

// iterate through t and delete chars from s if found in order
// if s is empty, return true, otherwise, false

var isSubsequence = function (s, t) {
    let s2 = s.split("");
    let t2 = t.split("");

    for (let i = 0; i < t2.length; i++) {
        if (t2[i] === s2[0]) {
            s2.shift();
        }
    }

    if (s2.length === 0) {
        return true;
    } else {
        return false;
    }
};