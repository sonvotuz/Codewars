/* You'll be given a string, and have to return the sum of all characters as an int. The function should be able to handle all ASCII characters.

examples:

uniTotal("a") == 97 uniTotal("aaa") == 291 */

// PREP
// Parameter: string
// Return: number
// Example: 'aaa' ==> 291

// Answer
function uniTotal(string) {
  return string
    .split("")
    .reduce((total, letter) => total + letter.charCodeAt(), 0);
}

uniTotal("a");
