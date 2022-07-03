/* This is the first step to understanding FizzBuzz.

Your inputs: a positive integer, n, greater than or equal to one. n is provided, you have NO CONTROL over its value.

Your expected output is an array of positive integers from 1 to n (inclusive).

Your job is to write an algorithm that gets you from the input to the output. */

// PREP
// Parameter: positive integer >= 1
// Return: array of positive integers from 1 to n
// Example: 3 => 1,2,3

function preFizz(n) {
  const arr = [];
  // loop from 1 to n to push each number to the array
  for (let i = 1; i <= n; i++) {
    arr.push(i);
  }
  return arr;
}

preFizz(5);
