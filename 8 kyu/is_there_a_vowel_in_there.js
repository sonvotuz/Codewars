/* Given an array of numbers, check if any of the numbers are the character codes for lower case vowels (a, e, i, o, u).

If they are, change the array value to a string of that vowel.

Return the resulting array. */

// PREP
// Parameter: array of number
// Return: array
// Example: [101,121,110,113,113,103,121,121,101,107,103] ==> ["e",121,110,113,113,103,121,121,"e",107,103]

// Answer
function isVow(a) {
  const vowels = "aeiou";
  // use String.fromCharCode(char) to convert character codes into character
  return a.map((el) =>
    vowels.includes(String.fromCharCode(el)) ? String.fromCharCode(el) : el
  );
}

isVow([101, 121, 110, 113, 113, 103, 121, 121, 101, 107, 103]);
