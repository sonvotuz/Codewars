/* Your task, is to create NxN multiplication table, of size provided in parameter.

for example, when given size is 3:

1 2 3
2 4 6
3 6 9
for given example, the return value should be: [[1,2,3],[2,4,6],[3,6,9]] */

// PREP
// Parameter: number
// Return: array of array of numbers
// Example: 2 => [[1,2],[2,4]]

// Answer
multiplicationTable = function (size) {
  const arr = [];
  for (let i = 1; i <= size; i++) {
    const arrayofNum = [];
    for (let j = 1; j <= size; j++) {
      arrayofNum.push(i * j);
    }
    arr.push(arrayofNum);
  }
  return arr;
};

multiplicationTable(3);
