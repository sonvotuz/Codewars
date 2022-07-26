/* Find the total sum of internal angles (in degrees) in an n-sided simple polygon. N will be greater than 2. */

// PREP
// Parameter: number
// Return: number
// Example: 4 ==> 360

// Answer
function angle(n) {
  return (n - 2) * 180;
}

angle(3);
