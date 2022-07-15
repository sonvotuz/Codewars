/* In this Kata, you will be given a string that may have mixed uppercase and lowercase letters and your task is to convert that string to either lowercase only or uppercase only based on:

make as few changes as possible.
if the string contains equal number of uppercase and lowercase letters, convert the string to lowercase.
For example:

solve("coDe") = "code". Lowercase characters > uppercase. Change only the "D" to lowercase.
solve("CODe") = "CODE". Uppercase characters > lowecase. Change only the "e" to uppercase.
solve("coDE") = "code". Upper == lowercase. Change all to lowercase.
More examples in test cases. Good luck! */

// PREP
// Parameter: string
// Return: string
// Example: 'coDe' => 'code'

// Answer
function solve(s) {
  let lowerCount = 0,
    upperCount = 0;
  // use split to get an array of each letter, then use for each and if-else check to check number of uppercase letter and lowercase letter
  s.split("").forEach((el) => {
    if (el === el.toLowerCase()) lowerCount++;
    else upperCount++;
  });
  // if if-else check to return correct result
  if (lowerCount >= upperCount) return s.toLowerCase();
  else return s.toUpperCase();
}

solve("CODe");
