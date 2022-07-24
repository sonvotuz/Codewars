/* Find the sum of the odd numbers within an array, after cubing the initial integers. The function should return undefined if any of the values aren't numbers. */

// PREP
// Parameter: array
// Return: undefined or number
// Example: [-3,-2,2,3] ==> 0

// Answer
function cubeOdd(arr) {
  // check whether the array contains all number elements
  if (arr.some((el) => isNaN(Number(el)))) return undefined;
  // use map() method to calculate the cube, then sum up all the cube which is odd
  return arr
    .map((el) => Math.pow(el, 3))
    .reduce((total, num) => (num % 2 !== 0 ? total + num : total), 0);
}
