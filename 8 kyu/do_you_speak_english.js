/* Given a string of arbitrary length with any ascii characters. Write a function to determine whether the string contains the whole word "English".

The order of characters is important -- a string "abcEnglishdef" is correct but "abcnEglishsef" is not correct.

Upper or lower case letter does not matter -- "eNglisH" is also correct.

Return value as boolean values, true for the string to contains "English", false for it does not.*/

// PREP
// Parameter: string
// Return: boolean
// Example: '123english' => true

// Answer
function spEng(sentence) {
  // use includes() method to check whether the sentence contain the word 'english'
  return sentence.toLowerCase().includes("english");
}

spEng("egnlish");
