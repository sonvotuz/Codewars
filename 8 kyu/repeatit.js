/* Create a function that takes a string and an integer (n).

The function should return a string that repeats the input string n number of times.

If anything other than a string is passed in you should return "Not a string"

Example
"Hi", 2 --> "HiHi"
1234, 5 --> "Not a string" */

// PREP
// Parameter: string, number
// Return: string
// Example: 'Hi', 2 => 'HiHi'

// Answer
var repeatIt = function (str, n) {
  // use typeof to check the type, and repeat to repeat the word certain amount of times
  if (typeof str === "string") return str.repeat(n);
  return "Not a string";
};

repeatIt("*", 3);
