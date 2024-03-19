/**
 * @param {string} date
 * @return {string}
 */
var reformatDate = function(date) {
    let elements = date.split(" ");
    let reformated = "";
    let months = new Set (["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]);
    let days = new Set (["1st", "2nd", "3rd", "4th", "5th", "6th", "7th", "8th", "9th", "10th", "11th", "12th", "13th", "14th", "15th", "16th", "17th", "18th", "19th", "20th", "21st", "22nd", "23rd", "24th", "25th", "26th", "27th", "28th", "29th", "30th", "31st"])

    let year = elements[2];
    let month = ([...months].indexOf(elements[1]) + 1).toString().padStart(2, '0');
    let day = ([...days].indexOf(elements[0]) + 1).toString().padStart(2, '0');

    return year + "-" + month + "-" + day
};