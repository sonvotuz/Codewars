/* Given a sequence of numbers, find the largest pair sum in the sequence.

For example

[10, 14, 2, 23, 19] -->  42 (= 23 + 19)
[99, 2, 2, 23, 19]  --> 122 (= 99 + 23)
Input sequence contains minimum two elements and every element is an integer. */

// PREP
// Parameter: an array of numbers
// Return: total (number)
// Example: [10, 14, 2, 23, 19] ==>  42 (= 23 + 19)

// Answer
function largestPairSum(numbers) {
  // sort array in descending order
  numbers.sort((a, b) => b - a);
  // return the sum of two largest elements
  return numbers[0] + numbers[1];
}
