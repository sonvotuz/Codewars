/* Your task is to sort a given string. Each word in the string will contain a single number. This number is the position the word should have in the result.

Note: Numbers can be from 1 to 9. So 1 will be the first word (not 0).

If the input string is empty, return an empty string. The words in the input String will only contain valid consecutive numbers.

Examples
"is2 Thi1s T4est 3a"  -->  "Thi1s is2 3a T4est"
"4of Fo1r pe6ople g3ood th5e the2"  -->  "Fo1r the2 g3ood 4of th5e pe6ople"
""  -->  "" */

// PREP
// Parameter: string
// Return: new sorted string
// Example: "is2 Thi1s T4est 3a"  ==>  "Thi1s is2 3a T4est"

// Answer
function order(words) {
  // split to get the array of word
  const arrOfWords = words.split(" ");
  const sortedString = [];
  // use forEach to loop through each word
  arrOfWords.forEach((el) => {
    // loop through each character of the word to check the number
    el.split("").some((char) => {
      // if there is number found, push the word to the corrected position in sortedString array
      if (Number(char)) {
        sortedString[Number(char) - 1] = el;
        return true;
      }
    });
  });
  return sortedString.join(" ");
}

order("is2 Thi1s T4est 3a");
