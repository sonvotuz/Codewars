/* Your task is to sum the differences between consecutive pairs in the array in descending order.

Example
[2, 1, 10]  -->  9
In descending order: [10, 2, 1]

Sum: (10 - 2) + (2 - 1) = 8 + 1 = 9

If the array is empty or the array has only one element the result should be 0 (Nothing in Haskell, None in Rust). */

// PREP
// Parameter: array of numbers
// Return: number
// Example: [2,1,10] => 9

// Answer
function sumOfDifferences(arr) {
  // sort the array in descending order
  arr.sort((a, b) => b - a);
  let sum = 0;
  // use for loop to get the sum of pairs
  for (let i = 0; i < arr.length - 1; i++) {
    sum += arr[i] - arr[i + 1];
  }
  // alternative way
  // return arr.length > 1 ? Math.max(...arr) - Math.min(...arr) : 0;
  return sum;
}

sumOfDifferences([2, 1, 10]);
