/* Your task is to write function findSum.

Upto and including n, this function will return the sum of all multiples of 3 and 5.

For example:

findSum(5) should return 8 (3 + 5)

findSum(10) should return 33 (3 + 5 + 6 + 9 + 10) */

// PREP
// Parameter: number
// Return: total number
// Example: 5 => 8

// Answer
function findSum(n) {
  let total = 0;
  for (let i = 3; i <= n; i++) {
    // conditional if to check the number is multiple of 3 or 5, if it is we add it to total
    if (i % 3 === 0 || i % 5 === 0) total += i;
  }
  return total;
}

findSum(10);
