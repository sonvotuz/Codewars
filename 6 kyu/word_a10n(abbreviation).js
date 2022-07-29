/* The word i18n is a common abbreviation of internationalization in the developer community, used instead of typing the whole word and trying to spell it correctly. Similarly, a11y is an abbreviation of accessibility.

Write a function that takes a string and turns any and all "words" (see below) within that string of length 4 or greater into an abbreviation, following these rules:

A "word" is a sequence of alphabetical characters. By this definition, any other character like a space or hyphen (eg. "elephant-ride") will split up a series of letters into two words (eg. "elephant" and "ride").
The abbreviated version of the word should have the first letter, then the number of removed characters, then the last letter (eg. "elephant ride" => "e6t r2e").
Example
abbreviate("elephant-rides are really fun!")
//          ^^^^^^^^*^^^^^*^^^*^^^^^^*^^^*
// words (^):   "elephant" "rides" "are" "really" "fun"
//                123456     123     1     1234     1
// ignore short words:               X              X

// abbreviate:    "e6t"     "r3s"  "are"  "r4y"   "fun"
// all non-word characters (*) remain in place
//                     "-"      " "    " "     " "     "!"
=== "e6t-r3s are r4y fun!" */

// PREP
// Parameter: string
// Return: string
// Example: 'elephant-rides' ==> 'e6t-r3s'

// Answer
function abbreviate(string) {
  // declare some variables
  const alphabet = "abcdefghijklmnopqrstuvwxyz";
  let arr = string.split("");
  let result = "";
  // use for loop to loop through each char of the array
  for (let i = 0; i < arr.length; i++) {
    // if we found any special character which is not alphabet char
    if (!alphabet.includes(arr[i].toLowerCase())) {
      if (i >= 4) {
        result += `${arr[0]}${i - 2}${arr[i - 1]}${arr[i]}`;
        arr = arr.slice(i + 1);
      } else {
        result += arr.slice(0, i + 1).join("");
        arr = arr.slice(i + 1);
      }
      i = -1;
      // when we don't find any special character (-  !)
    } else if (i === arr.length - 1) {
      if (i >= 3) result += `${arr[0]}${i - 1}${arr[i]}`;
      else result += arr.slice(0, i + 1).join("");
    }
  }
  return result;
}

abbreviate("elephant-rides are really fun!");
abbreviate("internationalization");
