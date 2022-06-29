// Your task is to write function factorial.
// factorial(0), 1)
// factorial(1), 1)
// factorial(7), 5040
// factorial(17), 355687428096000

function factorial(n) {
  return n > 1 ? factorial(n - 1) * n : 1;
}
