/**
 * @param {string} s
 * @return {number}
 */

// "(1+(2*3)+((8)/4))+1"

var maxDepth = function (s) {
    let count = { "(": 0, ")": 0 };  // {"(": 4, ")": 3};
    let maxDepth = 0; // 2 // 3

    for (let i of s) {
        if (i === "(") {
            count["("]++;
        } else if (i === ")") {
            count[")"]++;
        }

        let depth = count["("] - count[")"];

        maxDepth = Math.max(depth, maxDepth);
    }

    return maxDepth;
};

// stack
// push on opening brackets, and pop off when you hit a closing bracket