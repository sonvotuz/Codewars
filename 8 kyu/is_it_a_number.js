/* Given a string s, write a method (function) that will return true if its a valid single integer or floating number or false if its not.

Valid examples, should return true:

isDigit("3")
isDigit("  3  ")
isDigit("-3.23")
should return false:

isDigit("3-4")
isDigit("  3   5")
isDigit("3 5")
isDigit("zero") */

// PREP
// Parameter: string
// Return: boolean
// Example: '3' ==> true

function isDigit(s) {
  if (s.trim().length === 0) return false;
  return !isNaN(s);
}

// alternative way
function isDigit(s) {
  return s == parseFloat(s);
}

isDigit("s2324");
