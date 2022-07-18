/* Create a function that accepts a list/array and a number n, and returns a list/array of the first n elements from the list/array.

If you need help, here's a reference:

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice */

// PREP
// Parameter: array and number
// Return: array
// Example: [1,2,3], 2 => [1,2]

// Answer
function take(arr, n) {
  // use slice method to get a portion of the array
  return arr.slice(0, n);
}

take([1, 2, 3], 2);
