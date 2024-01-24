/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
    let stack = [];

    for (let i = 0; i < s.length; i++) {
        let currentChar = s[i];

        if (currentChar == "(" || currentChar == "{" || currentChar == "[") {
            stack.push(currentChar);
        } else if (currentChar == ")" && stack[stack.length - 1] == "(") {
            stack.pop();
        } else if (currentChar == "}" && stack[stack.length - 1] == "{") {
            stack.pop();
        } else if (currentChar == "]" && stack[stack.length - 1] == "[") {
            stack.pop();
        } else {
            return false;
        }
    }

    return !stack.length;
};