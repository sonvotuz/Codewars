/* The first input array is the key to the correct answers to an exam, like ["a", "a", "b", "d"]. The second one contains a student's submitted answers.

The two arrays are not empty and are the same length. Return the score for this array of answers, giving +4 for each correct answer, -1 for each incorrect answer, and +0 for each blank answer, represented as an empty string (in C the space character is used).

If the score < 0, return 0.

For example:

checkExam(["a", "a", "b", "b"], ["a", "c", "b", "d"]) → 6
checkExam(["a", "a", "c", "b"], ["a", "a", "b",  ""]) → 7
checkExam(["a", "a", "b", "c"], ["a", "a", "b", "c"]) → 16
checkExam(["b", "c", "b", "a"], ["",  "a", "a", "c"]) → 0 */

// PREP
// Parameter: two arrays
// Return: number
// Example: ["b", "c", "b", "a"], ["",  "a", "a", "c"]) → 0

// Answer
function checkExam(array1, array2) {
  // use reduce method to check and calculate the total score
  const result = array1.reduce((total, el, i) => {
    if (array2[i] !== "") {
      console.log(array2[i]);
      if (el === array2[i]) total += 4;
      else total -= 1;
    }
    return total;
  }, 0);
  // return 0 if the score less than 0
  return result > 0 ? result : 0;
}

checkExam(["a", "a", "b", "b"], ["a", "c", "b", "d"]);
