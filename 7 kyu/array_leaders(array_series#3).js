/* Task
Given an array/list [] of integers , Find all the LEADERS in the array.

Notes
Array/list size is at least 3 .

Array/list's numbers Will be mixture of positives , negatives and zeros

Repetition of numbers in the array/list could occur.

Returned Array/list should store the leading numbers in the same order in the original array/list .

Input >> Output Examples
arrayLeaders ({1, 2, 3, 4, 0}) ==> return {4}
Explanation:
4 is greater than the sum all the elements to its right side

Note : The last element 0 is equal to right sum of its elements (abstract zero).

arrayLeaders ({16, 17, 4, 3, 5, 2}) ==> return {17, 5, 2}
Explanation:
17 is greater than the sum all the elements to its right side

5 is greater than the sum all the elements to its right side

Note : The last element 2 is greater than the sum of its right elements (abstract zero).

arrayLeaders ({5, 2, -1}) ==> return {5, 2}
Explanation:
5 is greater than the sum all the elements to its right side

2 is greater than the sum all the elements to its right side

Note : The last element -1 is less than the sum of its right elements (abstract zero).

arrayLeaders ({0, -1, -29, 3, 2}) ==> return {0, -1, 3, 2}
Explanation:
0 is greater than the sum all the elements to its right side

-1 is greater than the sum all the elements to its right side

3 is greater than the sum all the elements to its right side

Note : The last element 2 is greater than the sum of its right elements (abstract zero). */

// PREP
// Paramter: array with at least 3 elements
// Return: array of numbers
// Example: [5,2,-1] ==> [5,2]

// Answer
function arrayLeaders(numbers) {
  const result = []
  const length = numbers.length - 1
  if (numbers[length] > 0) result.push(numbers[length])
  let sum = numbers[length]

  for (let i = length - 1; i >= 0; i--) {
    if (numbers[i] > sum) result.push(numbers[i])
    sum += numbers[i]
  }

  return result.reverse()
}

arrayLeaders([1, 2, 3, 4, 0])
arrayLeaders([-1, -29, -26, -2])
arrayLeaders([5, -2, 2])
arrayLeaders([
  -145, -789, -417, 162, -123, -553, -779, 420, -469, 406, 624, -494, -582,
  -113, 59, -850, 303, -261, 374, -618, 428, 16, 418, -374, -282, -220, 631, 74,
  -823, 144, -83, 250, 295, 38, -770, 321, -558, 336, -401, 188, 264, -38, -581,
  -771, -243, 123, -111, 450, -503, -39, 145, 5, -345, -608, 475, -462, 150,
  -550, -647, -391, -388, -631, 14, 636, 432, -64, -165, -425, -343, -691, -46,
  -179, 618, -677, 17, 210, -350, -28, 395, -375, 373, 417, 468, 347, 159, -593,
  -420, -184, 364, 826, -452, -375, 336, -454, -462, -44, 307, -154, 451, 60,
  -13, -30, -134, 261, 5, 274, -269,
])
