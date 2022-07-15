/* Implement a function that accepts 3 integer values a, b, c. The function should return true if a triangle can be built with the sides of given length and false in any other case.

(In this case, all triangles must have surface greater than 0 to be accepted). */

// PREP
// Parameter: 3 integers
// Return: boolean
// Example: 1,2,2 => true

// Answer
function isTriangle(a, b, c) {
  // the sum of two sides of a triangle must be greater than the third side
  return a + b > c && b + c > a && a + c > b;
}

isTriangle(1, 2, 2);
