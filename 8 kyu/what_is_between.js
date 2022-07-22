/* Complete the function that takes two integers (a, b, where a < b) and return an array of all integers between the input parameters, including them.

For example:

a = 1
b = 4
--> [1, 2, 3, 4] */

// PREP
// Parameter: two numbers
// Return: array of number
// Example: 1,3 ==> [1,2,3]

// Answer
function between(a, b) {
  const arr = [];
  for (let i = a; i <= b; i++) {
    arr.push(i);
  }
  return arr;
}

between(1, 4);
