/* The purpose of this kata is to work out just how many bottles of duty free whiskey you would have to buy such that the saving over the normal high street price would effectively cover the cost of your holiday.

You will be given the high street price (normPrice), the duty free discount (discount) and the cost of the holiday.

For example, if a bottle cost £10 normally and the discount in duty free was 10%, you would save £1 per bottle. If your holiday cost £500, the answer you should return would be 500.

All inputs will be integers. Please return an integer. Round down.*/

// PREP
// Parameter: high street price (number), duty free discount (number), cost of the holiday (number)
// Return: number
// Example: 10, 1, 500 => 500

// Answer
function dutyFree(normPrice, discount, hol) {
  // profit: normPrice * discount / 100
  // in order to cover the holiday, total bottle need to buy: hol / profit, then round it down to the nearest integer
  return Math.floor(hol / (normPrice * (discount / 100)));
}

dutyFree(12, 50, 1000);
