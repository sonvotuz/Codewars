/* Modify the spacify function so that it returns the given string with spaces inserted between each character.

spacify("hello world") // returns "h e l l o   w o r l d" */

// PREP
// Parameter: string
// Return: string
// Example: 'hello world' ==> 'h e l l o  w o r l d'

// Answer
function spacify(str) {
  return str.split("").join(" ");
}
