/* Debugging sayHello function
The starship Enterprise has run into some problem when creating a program to greet everyone as they come aboard. It is your job to fix the code and get the program working again!

Example output:

Hello, Mr. Spock */

// PREP
// Parameter: name string
// Return: Hello + name string
// Example: "Bob" => Hello Bob

// Answer
function sayHello(name) {
  // use template literal
  return `Hello, ${name}`;
}

sayHello("Bob");
