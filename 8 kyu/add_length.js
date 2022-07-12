/* What if we need the length of the words separated by a space to be added at the end of that same word and have it returned as an array?

Example(Input --> Output)

"apple ban" --> ["apple 5", "ban 3"]
"you will win" -->["you 3", "will 4", "win 3"]
Your task is to write a function that takes a String and returns an Array/list with the length of each word added to each element .

Note: String will have at least one element; words will always be separated by a space. */

// PREP
// Parameter: string
// Return: array of strings
// Example: "apple ban" => ["apple 5", "ban 3"]

// Answer
function addLength(str) {
  // use split() to split the string into array of string, use map() method to add the length of each word to the end of the word
  return str.split(" ").map((word) => `${word} ${word.length}`);
}

addLength("you will win");
