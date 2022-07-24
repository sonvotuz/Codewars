/* Write a function that takes a positive integer n, sums all the cubed values from 1 to n, and returns that sum.

Assume that the input n will always be a positive integer.

Examples: (Input --> output)

2 --> 9 (sum of the cubes of 1 and 2 is 1 + 8)
3 --> 36 (sum of the cubes of 1, 2, and 3 is 1 + 8 + 27) */

// PREP
// Parameter: positive integer
// Return: integer
// Example: 3 ==> 36

// Answer
function sumCubes(n) {
  let sum = 1;
  // use for loop to loop through number from 2 to n, and calculate the cubed values and add to sum
  for (let i = 2; i <= n; i++) {
    sum += Math.pow(i, 3);
  }
  return sum;
}

sumCubes(3);
