/* Basic regex tasks. Write a function that takes in a numeric code of any length. The function should check if the code begins with 1, 2, or 3 and return true if so. Return false otherwise.

You can assume the input will always be a number. */

// PREP
// Parameter: number
// Return: boolean
// Example: 123 => true

// Answer
function validateCode(code) {
  // test whether the code contains 1 or 2 or 3 at the beginning
  return /^[123]/.test(code);
}

validateCode(123);
