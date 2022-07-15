/* Description:
Remove all exclamation marks from sentence but ensure a exclamation mark at the end of string. For a beginner kata, you can assume that the input data is always a non empty string, no need to verify it.

Examples
remove("Hi!") === "Hi!"
remove("Hi!!!") === "Hi!"
remove("!Hi") === "Hi!"
remove("!Hi!") === "Hi!"
remove("Hi! Hi!") === "Hi Hi!"
remove("Hi") === "Hi!" */

// PREP
// Parameter: string
// Return: string
// Example: '!Hi' => 'Hi!'

// Answer
function remove(string) {
  // use split() method to remove all !, join to get the new string without !, and add ! at the end of the string
  return string.split("!").join("") + "!";
}

remove("Hi!");
