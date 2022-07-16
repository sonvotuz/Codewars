/* Description:
Replace all vowel to exclamation mark in the sentence. aeiouAEIOU is vowel.

Examples
replace("Hi!") === "H!!"
replace("!Hi! Hi!") === "!H!! H!!"
replace("aeiou") === "!!!!!"
replace("ABCDE") === "!BCD!" */

// PREP
// Parameter: string
// Return: string
// Example: 'Hi!' => 'H!!'

// Answer
function replace(s) {
  // vowel variable
  const vowel = "aeiouAEIOU";
  // use split() method to convert string into an array then use map() method to replace all vowel to exclmation mark, join back in and return the result
  return s
    .split("")
    .map((letter) => (vowel.includes(letter) ? "!" : letter))
    .join("");
}

replace("!Hi! Hi!");
