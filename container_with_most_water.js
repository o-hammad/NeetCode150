/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
    let l = 0;
    let r = height.length - 1;
    maxWater = 0;

    while (l < r) {
        let width = r - l;

        let h = Math.min(height[l], height[r]);

        let water = width * h;

        maxWater = Math.max(maxWater, water);

        if (height[l] < height[r]) {
            l++;
        } else {
            r--;
        }
    }

    return maxWater;
};