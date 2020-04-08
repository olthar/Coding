// Collect input from a user
const userIn = parseInt(prompt("Give me a number now"));

// Convert the input to a number


// Use Math.random() and the user's number to generate a random number
const generator = Math.floor(Math.random()*userIn)+1;

// Create a message displaying the random number

console.log(`${generator} is a number between 1 and ${userIn}`);