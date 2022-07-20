/* Step 1: Create a function called encode() to replace all the lowercase vowels in a given string with numbers according to the following pattern:

a -> 1
e -> 2
i -> 3
o -> 4
u -> 5
For example, encode("hello") would return "h2ll4". There is no need to worry about uppercase vowels in this kata.

Step 2: Now create a function called decode() to turn the numbers back into vowels according to the same pattern shown above.

For example, decode("h3 th2r2") would return "hi there".

For the sake of simplicity, you can assume that any numbers passed into the function will correspond to vowels. */

// PREP
// Parameter: string
// Return: encoded or decoded string
// Example: encode: 'hello' => 'h2ll4', decode: 'h3 th2r2' => 'hi there'

// Answer
function encode(string) {
  const vowels = { a: 1, e: 2, i: 3, o: 4, u: 5 };

  // use map() method to loop through each element and check whether the character is a vowel, if it is then we return a number according to the pattern
  return string
    .split("")
    .map((char) => (vowels.hasOwnProperty(char) ? vowels[char] : char))
    .join("");
}

encode("hello");

function decode(string) {
  const convertVowels = { 1: "a", 2: "e", 3: "i", 4: "o", 5: "u" };
  return string
    .split("")
    .map((char) =>
      convertVowels.hasOwnProperty(char) ? convertVowels[char] : char
    )
    .join("");
}

decode("h3 th2r2");
