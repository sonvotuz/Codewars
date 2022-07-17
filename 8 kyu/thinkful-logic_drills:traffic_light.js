/* You're writing code to control your town's traffic lights. You need a function to handle each change from green, to yellow, to red, and then to green again.

Complete the function that takes a string as an argument representing the current state of the light and returns a string representing the state the light should change to.

For example, when the input is green, output should be yellow.*/

// PREP
// Parameter: string
// Return: string
// Example: 'red' => 'green'

// Answer
function updateLight(current) {
  // use object to return the next traffic light
  const lights = { red: "green", green: "yellow", yellow: "red" };
  return lights[current];
}

updateLight("red");
