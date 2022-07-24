/* Write function parseF which takes an input and returns a number or null if conversion is not possible. The input can be one of many different types so be aware. */

// PREP
// Parameter: any type
// Return: null or number
// Example: '1' => 1

// Answer
function parseF(s) {
  if (isNaN(parseFloat(s))) return null;
  return parseFloat(s);
}
