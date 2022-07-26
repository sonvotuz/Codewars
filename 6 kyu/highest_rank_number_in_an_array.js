/* Complete the method which returns the number which is most frequent in the given input array. If there is a tie for most frequent number, return the largest number among them.

Note: no empty arrays will be given.

Examples
[12, 10, 8, 12, 7, 6, 4, 10, 12]              -->  12
[12, 10, 8, 12, 7, 6, 4, 10, 12, 10]          -->  12
[12, 10, 8, 8, 3, 3, 3, 3, 2, 4, 10, 12, 10]  -->   3 */

// PREP
// Parameter: array
// Return: number
// Example: [12, 10, 8, 12, 7, 6, 4, 10, 12] ==> 12

// Answer
function highestRank(arr) {
  // declare an object, and max variable
  const objNum = {};
  let max = 0;
  // use foreach loop to calculate the frequent of number in array and get maximum value
  arr.forEach((el) => {
    if (!objNum.hasOwnProperty(el)) objNum[el] = 1;
    else objNum[el] += 1;
    if (max < objNum[el]) max = objNum[el];
  });

  const arrNum = [];
  // get the array of numbers which appear same amount of times
  for (let key in objNum) {
    if (objNum[key] === max) arrNum.push(key);
  }

  // get the highest number and return
  return Math.max(...arrNum);
}

highestRank([12, 10, 8, 12, 7, 6, 4, 10, 12]);
