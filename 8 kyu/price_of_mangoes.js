/* There's a "3 for 2" (or "2+1" if you like) offer on mangoes. For a given quantity and price (per mango), calculate the total cost of the mangoes.

Examples
mango(3, 3) ==> 6    # 2 mangoes for 3 = 6; +1 mango for free
mango(9, 5) ==> 30   # 6 mangoes for 5 = 30; +3 mangoes for free */

// PREP
// Parameter: number, number
// Return: number
// Example: 9,5 => 30

// Answer
function mango(quantity, price) {
  // quantity * 2 / 3 will give us the quantity of mangoes which got promotion 2+1
  // Math.ceil to get any additional mango which does not get 2+1 promotion
  return Math.ceil((quantity * 2) / 3) * price;
}

mango(9, 5);
