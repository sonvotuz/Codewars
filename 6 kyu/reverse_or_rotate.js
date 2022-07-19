/* The input is a string str of digits. Cut the string into chunks (a chunk here is a substring of the initial string) of size sz (ignore the last chunk if its size is less than sz).

If a chunk represents an integer such as the sum of the cubes of its digits is divisible by 2, reverse that chunk; otherwise rotate it to the left by one position. Put together these modified chunks and return the result as a string.

If

sz is <= 0 or if str is empty return ""
sz is greater (>) than the length of str it is impossible to take a chunk of size sz hence return "".
Examples:
revrot("123456987654", 6) --> "234561876549"
revrot("123456987653", 6) --> "234561356789"
revrot("66443875", 4) --> "44668753"
revrot("66443875", 8) --> "64438756"
revrot("664438769", 8) --> "67834466"
revrot("123456779", 8) --> "23456771"
revrot("", 8) --> ""
revrot("123456779", 0) --> "" 
revrot("563000655734469485", 4) --> "0365065073456944"
Example of a string rotated to the left by one position:
s = "123456" gives "234561". */

// PREP
// Parameter: string, number
// Return: string
// Example: "123456779", 0 ==> ""

// Answer
function revrot(str, sz) {
  // check if the str is empty or string length less than sz or sz less than 0
  if (sz <= 0 || !str || sz > str.length) return "";
  const arr = [];
  let count = 1;
  // use while loop to chunk the string into small string
  while (sz * count <= str.length) {
    arr.push(str.slice(sz * (count - 1), sz * count));
    count++;
  }

  // use map() method to check
  return arr
    .map((numb) => {
      // calculate the sum of cubes of each digits
      const sumOfCubes = numb
        .split("")
        .reduce((total, num) => total + Math.pow(num, 3), 0);
      // check if sum of cubes is divisible by 2, return the reverse of string
      if (sumOfCubes % 2 === 0) return numb.split("").reverse().join("");
      // otherwise return the rotated string
      return rotateToLeftByOne(numb);
    })
    .join("");
}

// function to get the rotated string
function rotateToLeftByOne(numb) {
  return String(numb).slice(1) + String(numb)[0];
}

revrot("1056982388193297527633870998", 9);
