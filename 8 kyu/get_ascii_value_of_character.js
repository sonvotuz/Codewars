/* Get ASCII value of a character.

For the ASCII table you can refer to http://www.asciitable.com/ */

// PREP
// Parameter: string
// Return: number
// Example: 'A' ==> 65

// Answer
function getASCII(c) {
  return c.charCodeAt(0)
}

getASCII("A")
