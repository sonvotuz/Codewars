/* Find the number with the most digits.

If two numbers in the argument array have the same number of digits, return the first one in the array. */

// PREP
// Parameter: array of numbers
// Return: number
// Example: [1,10,100] ==> 100

// Answer
function findLongest(array) {
  // use sort() method to sort the array in descending order, the number with most digits will be on top
  // hence at index 0 we will get the correct result
  return array.sort((a, b) => b.toString().length - a.toString().length)[0];
}

findLongest([1, 10, 100]);
