/* Your task is to make a function that can take any non-negative integer as an argument and return it with its digits in descending order. Essentially, rearrange the digits to create the highest possible number.

Examples:
Input: 42145 Output: 54421

Input: 145263 Output: 654321

Input: 123456789 Output: 987654321 */

// PREP
// Parameter: non-negative integer
// Return: highest number from the digits of the argument
// Example: 42145 => 54421

// Answer
function descendingOrder(n) {
  // split the number into an array of each digits, sort the digits in descending order, then join it back and return the result
  return Number(
    String(n)
      .split("")
      .sort((a, b) => b - a)
      .join("")
  );
}

descendingOrder(42145);
