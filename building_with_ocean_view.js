// Buildings With an Ocean View

// There are n buildings in a line. You are given an integer array heights of size n that represents the heights of the buildings in the line.

// The ocean is to the right of the buildings. A building has an ocean view if the building can see the ocean without obstructions. Formally, a building has an ocean view if all the buildings to its right have a smaller height.

// Return a list of indices (0-indexed) of buildings that have an ocean view, sorted in increasing order.



// Example 1:

// Input: heights = [4,2,3,1]
// Output: [0,2,3]
// Explanation: Building 1 (0-indexed) does not have an ocean view because building 2 is taller.
// Example 2:

// Input: heights = [4,3,2,1]
// Output: [0,1,2,3]
// Explanation: All the buildings have an ocean view.
// Example 3:

// Input: heights = [1,3,2,4]
// Output: [3]
// Explanation: Only building 3 has an ocean view.

// traverse the array backwards
// keep track of the tallest height encountered
// if the tallest height encountered is less than the height of the current building, then it has an ocean view
// store those in a results array

var findBuildings = function (heights) {
    let result = [];
    let highestBuildingEncountered = 0;

    for (let i = heights.length - 1; i >= 0; i--) {
        if (heights[i] > highestBuildingEncountered) {
            result.push(i);
        }

        highestBuildingEncountered = Math.max(heights[i], highestBuildingEncountered);
    }

    result = result.reverse();

    return result;
};

var findBuildings2 = function (heights) {
    let result = []; // monotonic stack
    // increasing values or always decreasing

    for (let i = 0; i < heights.length; i++) {
        while (result.length && heights[i] > heights[result[result.length - 1]]) {
            result.pop();
        }

        result.push(i)
    }

    return result;
}

console.log(findBuildings2([4, 2, 3, 1]))
console.log(findBuildings2([4, 3, 2, 1]))
console.log(findBuildings2([1, 3, 2, 4]))