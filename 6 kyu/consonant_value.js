/* Given a lowercase string that has alphabetic characters only and no spaces, return the highest value of consonant substrings. Consonants are any letters of the alphabet except "aeiou".

We shall assign the following values: a = 1, b = 2, c = 3, .... z = 26.

For example, for the word "zodiacs", let's cross out the vowels. We get: "z o d ia cs"

-- The consonant substrings are: "z", "d" and "cs" and the values are z = 26, d = 4 and cs = 3 + 19 = 22. The highest is 26.
solve("zodiacs") = 26

For the word "strength", solve("strength") = 57
-- The consonant substrings are: "str" and "ngth" with values "str" = 19 + 20 + 18 = 57 and "ngth" = 14 + 7 + 20 + 8 = 49. The highest is 57.
For C: do not mutate input.

More examples in test cases. Good luck! */

// PREP
// Parameter: word (string)
// Return: number
// Example: 'zodiacs' => 26

// Answer
function solve(s) {
  const vowels = "aeiou";
  const arr = [];
  let index = 0;
  s.split("").forEach((letter, i) => {
    if (vowels.includes(letter)) {
      if (index < i) arr.push(s.slice(index, i));
      index = i + 1;
    } else if (i === s.length - 1) {
      arr.push(s.slice(index));
    }
  });

  return arr
    .map((word) => {
      return word
        .split("")
        .reduce((total, el) => total + String(el).charCodeAt() - 96, 0);
    })
    .sort((a, b) => b - a)[0];
}

// Alternative way
// function solve(s) {
//   const vowels = "aeiou";
//   let highest = 0;
//   let sum = 0;
//   for (const letter of s) {
//     if (!vowels.includes(letter)) {
//       sum += letter.charCodeAt() - 96;
//       if (highest < sum) highest = sum;
//     } else {
//       sum = 0;
//     }
//   }
//   return highest;
// }

solve("zodiacs");
solve("strength");
