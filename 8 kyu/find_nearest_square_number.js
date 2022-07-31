/* Your task is to find the nearest square number, nearest_sq(n), of a positive integer n.

Goodluck :) */

// PREP
// Parameter: number
// Return: number
// Example: 10 ==> 9

// Answer
function nearestSq(n) {
  return Math.round(Math.sqrt(n)) ** 2;
}

nearestSq(111);
