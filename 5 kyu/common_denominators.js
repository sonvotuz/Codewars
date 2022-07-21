/* Common denominators

You will have a list of rationals in the form

{ {numer_1, denom_1} , ... {numer_n, denom_n} } 
or
[ [numer_1, denom_1] , ... [numer_n, denom_n] ] 
or
[ (numer_1, denom_1) , ... (numer_n, denom_n) ] 
where all numbers are positive ints. You have to produce a result in the form:

(N_1, D) ... (N_n, D) 
or
[ [N_1, D] ... [N_n, D] ] 
or
[ (N_1', D) , ... (N_n, D) ] 
or
{{N_1, D} ... {N_n, D}} 
or
"(N_1, D) ... (N_n, D)"
depending on the language (See Example tests) in which D is as small as possible and

N_1/D == numer_1/denom_1 ... N_n/D == numer_n,/denom_n.
Example:
convertFracs [(1, 2), (1, 3), (1, 4)] `shouldBe` [(6, 12), (4, 12), (3, 12)]
Note:
Due to the fact that the first translations were written long ago - more than 6 years - these first translations have only irreducible fractions.

Newer translations have some reducible fractions. To be on the safe side it is better to do a bit more work by simplifying fractions even if they don't have to be.

Note for Bash:
input is a string, e.g "2,4,2,6,2,8" output is then "6 12 4 12 3 12" */

// PREP
// Parameter: array of array of positive number
// Return: string
// Example: [[1, 2], [1, 3], [1, 4],] ==> (6,12)(4,12)(3,12)

// Answer
function convertFrac(lst) {
  // declare variables
  let denominator = 1;
  let max = -1;
  const setOfNums = new Set();

  // use map() method to find the maximum number of 2nd element of each sub array, and find the set of numbers to calculate denominator
  lst.map((el) => {
    let count = 2;
    let num = el[1];
    if (num > max) max = num;
    while (count <= num) {
      if (num % count === 0) {
        num /= count;
        setOfNums.add(count);
      } else {
        count++;
      }
    }
  });

  // generate array from set and calculate denominator from array
  const arr = Array.from(setOfNums);
  arr.forEach((el) => (denominator = denominator * el));

  // check cases where the denominator is too low so the 1st number of each pair is not integer (float number), and get correct number
  lst.forEach((num) => {
    if (denominator % num[1] !== 0) {
      arr.some((numb) => {
        if ((numb * denominator) % num[1] === 0) {
          denominator *= numb;
          return true;
        }
      });
    }
  });

  // calculate denominator which is less than the maximum number of 2nd number in the pair, if it's less than we multiply it by counter
  let count = 1;
  while (denominator * count < max) {
    count++;
  }
  denominator *= count;

  // return correct result
  return lst
    .map((el) => `(${(denominator / el[1]) * el[0]},${denominator})`)
    .join("");
}

convertFrac([
  [1, 2],
  [1, 3],
  [1, 4],
]);

convertFrac([
  [1, 100],
  [3, 1000],
  [1, 2500],
  [1, 20000],
]);
