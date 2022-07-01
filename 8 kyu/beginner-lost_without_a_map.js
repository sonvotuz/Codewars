/* Given an array of integers, return a new array with each value doubled.

For example:

[1, 2, 3] --> [2, 4, 6] */

// PREP
// Parameter: an array of integers
// Return: new array with value doubled
// Example: [1,2,3] => [2,4,6]; [5,7,8] => [10, 14, 16]

// Answer
function maps(x) {
  // map() method to update every element
  return x.map((el) => el * 2);
}

maps([1, 2, 3]);
maps([4, 1, 1, 1, 4]);
