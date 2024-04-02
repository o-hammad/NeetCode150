/**
 * @param {number[]} houses
 * @param {number[]} heaters
 * @return {number}
 */

// houses = [1,2,3], heaters = [2]
// houses = [1,2,3,4], heaters = [1,4]

var findRadius = function (houses, heaters) {
    let maxRadius = 0;

    for (let house of houses) { // 1 // 2 // 3 // 4
        let closestHeatertoHouse = Infinity;

        for (let heater of heaters) { // 1 // 4            
            if (house === heater) {
                closestHeatertoHouse = Math.min(0, closestHeatertoHouse) // 0
            } else {
                radius = Math.abs(house - heater) // 4 - 1 = 3
                closestHeatertoHouse = Math.min(radius, closestHeatertoHouse) // 3, 0
            }
        }

        maxRadius = Math.max(closestHeatertoHouse, maxRadius) // closest = 0, maxRadius = 0
    }

    return maxRadius;
};

// iterate through houses to find the longest distance house from the heater