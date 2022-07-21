/* Consider the word "abode". We can see that the letter a is in position 1 and b is in position 2. In the alphabet, a and b are also in positions 1 and 2. Notice also that d and e in abode occupy the positions they would occupy in the alphabet, which are positions 4 and 5.

Given an array of words, return an array of the number of letters that occupy their positions in the alphabet for each word. For example,

solve(["abode","ABc","xyzD"]) = [4, 3, 1]
See test cases for more examples.

Input will consist of alphabet characters, both uppercase and lowercase. No spaces.

Good luck! */

// PREP
// Parameter: array of strings
// Return: array of numbers
// Example: ["abode", "ABc", "xyzD"] ==> [4,3,1]

// Answer
function solve(arr) {
  const alphabet = "abcdefghijklmnopqrstuvwxyz";
  // use map() method to check each element and get new populated element
  return arr.map((word) => {
    // split() is used to get an array of character, then use reduce() method to get the total number of letters that occupy their positions in the alphabet
    return word.split("").reduce((total, char, i) => {
      if (alphabet.indexOf(char.toLowerCase()) === i) total++;
      return total;
    }, 0);
  });
}

solve(["abode", "ABc", "xyzD"]);
