/* Given a variable n,

If n is an integer, Return a string with dash'-'marks before and after each odd integer, but do not begin or end the string with a dash mark. If n is negative, then the negative sign should be removed.

If n is not an integer, return the string "NaN".

Ex:

dashatize(274) -> '2-7-4'
dashatize(6815) -> '68-1-5' */

// PREP
// Parameter: number
// Return: string
// Example: 274 ==> '2-7-4'

// Answer
function dashatize(num) {
  // parameter is not a number
  if (isNaN(num)) return "NaN";
  // parameter is a negative number
  else if (num < 0) return Math.abs(num).toString();
  // the number is only single digit
  else if (num.toString().length === 1) return num.toString();
  else {
    // generate array from number
    num = num.toString().split("");
    let result = "";
    // loop through array and check
    for (let i = 0; i < num.length; i++) {
      // odd integer
      if (+num[i] % 2 !== 0) {
        if (i === num.length - 1 && result[result.length - 1] !== "-")
          result += `-${num[i]}`;
        else if (i === num.length - 1 && result[result.length - 1] === "-")
          result += num[i];
        else if (i === 0 || result[result.length - 1] === "-")
          result += `${num[i]}-`;
        else result += `-${num[i]}-`;
      }
      // even integer
      else result += num[i];
    }

    return result;
  }
}

dashatize(974302);
