/* Write a simple regex to validate a username. Allowed characters are:

lowercase letters,
numbers,
underscore
Length should be between 4 and 16 characters (both included). */

// PREP
// Parameter: string
// Return: boolean
// Example: "p1pp1" => true

// Answer
function validateUsr(username) {
  // only lowercase letters, numbers, and underscore allow; the length from 4 to 16 included
  res = /^[a-z0-9_]{4,16}$/.test(username);
  return res;
}
