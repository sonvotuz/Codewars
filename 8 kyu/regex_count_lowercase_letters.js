/* Your task is simply to count the total number of lowercase letters in a string.

Examples
lowercaseCount("abc"); ===> 3

lowercaseCount("abcABC123"); ===> 3

lowercaseCount("abcABC123!@€£#$%^&*()_-+=}{[]|\':;?/>.<,~"); ===> 3

lowercaseCount(""); ===> 0;

lowercaseCount("ABC123!@€£#$%^&*()_-+=}{[]|\':;?/>.<,~"); ===> 0

lowercaseCount("abcdefghijklmnopqrstuvwxyz"); ===> 26 */

// PREP
// Parameter: string
// Return: number
// Example: 'abc' => 3

// Answer
function lowercaseCount(str) {
  return str.split("").reduce((total, letter) => {
    // check if the letter is alphabet and it is lowercase
    if (
      letter === letter.toLowerCase() &&
      letter.toLowerCase() !== letter.toUpperCase()
    )
      total++;
    return total;
  }, 0);
}

lowercaseCount("abc");
