/**
 * @param {number[]} temperatures
 * @return {number[]}
 */

var top = function (stack) {
    return stack[stack.length - 1];
}

var dailyTemperatures = function (temperatures) {
    let stack = [];
    let result = Array(temperatures.length).fill(0);

    for (let i = 0; i < temperatures.length; i++) {
        while (stack.length && temperatures[top(stack)] < temperatures[i]) {
            let index = stack.pop();
            result[index] = i - index;
        }
        stack.push(i);
    }

    return result;
};