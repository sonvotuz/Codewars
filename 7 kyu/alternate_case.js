/* Write function alternateCase which switch every letter in string from upper to lower and from lower to upper. E.g: Hello World -> hELLO wORLD */

// PREP
// Parameter: string
// Return: string
// Example: 'abc' ==> 'ABC'

// Answer
function alternateCase(s) {
  return s
    .split("")
    .map((char) =>
      char === char.toUpperCase() ? char.toLowerCase() : char.toUpperCase()
    )
    .join("");
}

alternateCase("abc");
