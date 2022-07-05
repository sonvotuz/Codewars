/* This program tests the life of an evaporator containing a gas.

We know the content of the evaporator (content in ml), the percentage of foam or gas lost every day (evap_per_day) and the threshold (threshold) in percentage beyond which the evaporator is no longer useful. All numbers are strictly positive.

The program reports the nth day (as an integer) on which the evaporator will be out of use.

Example:
evaporator(10, 10, 5) -> 29
Note:
Content is in fact not necessary in the body of the function "evaporator", you can use it or not use it, as you wish. Some people might prefer to reason with content, some other with percentages only. It's up to you but you must keep it as a parameter because the tests have it as an argument. */

// PREP
// Parameter: content number, evap_per_day percentage, threshold percentage
// Return: total number of days
// Example: 10,10,5 => 29

// Answer
function evaporator(content, evap_per_day, threshold) {
  // declare variables
  let countDay = 0;
  let total = 100;
  // while loop to check the total percentage of gas and the threshold
  while (total > threshold) {
    countDay++;
    // each day has passed, we use evap_per_day % => the total percentage of gas left is total * (100- evap_per_day) / 100
    total *= (100 - evap_per_day) / 100;
  }
  return countDay;
}

evaporator(10, 10, 10);
