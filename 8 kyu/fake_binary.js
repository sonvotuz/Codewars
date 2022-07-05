/* Given a string of digits, you should replace any digit below 5 with '0' and any digit 5 and above with '1'. Return the resulting string.

Note: input will never be an empty string */

// PREP
// Parameter: string of digits
// Return: resulting string
// Example: 509321967506747 => 101000111101101

// Answer
function fakeBin(x) {
  return x
    .split("")
    .map((digit) => (digit < 5 ? 0 : 1))
    .join("");
}

fakeBin("45385593107843568");
