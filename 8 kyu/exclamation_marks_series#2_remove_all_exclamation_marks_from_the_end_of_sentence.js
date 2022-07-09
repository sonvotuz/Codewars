/* Description:
Remove all exclamation marks from the end of sentence.

Examples
remove("Hi!") === "Hi"
remove("Hi!!!") === "Hi"
remove("!Hi") === "!Hi"
remove("!Hi!") === "!Hi"
remove("Hi! Hi!") === "Hi! Hi"
remove("Hi") === "Hi" */

// PREP
// Parameter: string
// Return: string with no exclamation marks at the end
// Example: Hi! Hi! => Hi! Hi

// Answer
function remove(string) {
  // prepare variable
  let lastIndex = string.length;
  // use while loop to check the exclamation mark in the end of sentence and save the index to variable
  while (string[lastIndex - 1] === "!") {
    lastIndex--;
  }
  // return the string without exclamation marks at the end with slice() method
  return string.slice(0, lastIndex);
}

remove("Hi!!!");
