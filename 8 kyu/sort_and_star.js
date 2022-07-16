/* You will be given a vector of strings. You must sort it alphabetically (case-sensitive, and based on the ASCII values of the chars) and then return the first value.

The returned value must be a string, and have "***" between each of its letters.

You should not remove or add elements from/to the array. */

// PREP
// Parameter: an array
// Return: string
// Example: ["turns", "out", "random", "test", "cases", "are", "easier", "than", "writing", "out", "basic", "ones"] => 'a***r***e'

// Answer
function twoSort(s) {
  return s.sort()[0].split("").join("***");
}

twoSort([
  "turns",
  "out",
  "random",
  "test",
  "cases",
  "are",
  "easier",
  "than",
  "writing",
  "out",
  "basic",
  "ones",
]);
