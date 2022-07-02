/* Write a function named repeater() that takes two arguments (a string and a number), and returns a new string where the input string is repeated that many times.

Example: (Input1, Input2 --> Output)
"a", 5 --> "aaaaa" */

// PREP
// Parameter: string, number
// Return: string
// Example: "a", 5 => "aaaaa"

function repeater(string, n) {
  // use repeat method() to repeat the string X times
  return string.repeat(n);
}

repeater("a", 5);
repeater("Wub ", 6);
