/* Introduction and Warm-up (Highly recommended)
Playing With Lists/Arrays Series
Task
Given an array of integers , Find the minimum sum which is obtained from summing each Two integers product .

Notes
Array/list will contain positives only .
Array/list will always have even size
Input >> Output Examples
minSum({5,4,2,3}) ==> return (22) 
Explanation:
The minimum sum obtained from summing each two integers product ,  5*2 + 3*4 = 22
minSum({12,6,10,26,3,24}) ==> return (342)
Explanation:
The minimum sum obtained from summing each two integers product ,  26*3 + 24*6 + 12*10 = 342
minSum({9,2,8,7,5,4,0,6}) ==> return (74)
Explanation:
The minimum sum obtained from summing each two integers product ,  9*0 + 8*2 +7*4 +6*5 = 74 */

// PREP
// Parameter: array of positive numbers
// Return: number
// Example: [5,4,2,3] ==> 22

// Answer
function minSum(arr) {
  // sort array in ascending order
  arr.sort((a, b) => a - b);
  let minSum = 0;
  // use forloop to loop through the array and calculate the product of the first half of the array with the second half of the array
  // first element * last element, 2nd first element * 2nd last elemen and so on
  for (let i = 0; i < arr.length / 2; i++) {
    minSum += arr[i] * arr[arr.length - i - 1];
  }
  return minSum;
}

minSum([5, 4, 2, 3]);
