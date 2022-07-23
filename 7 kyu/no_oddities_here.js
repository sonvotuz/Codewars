/* Write a small function that returns the values of an array that are not odd.

All values in the array will be integers. Return the good values in the order they are given. */

// PREP
// Parameter: array
// Return: array
// Example: [0,1,2,3] ==> [0,2]

// Answer
function noOdds(values) {
  return values.filter((num) => num % 2 === 0);
}

noOdds([0, 1]);
