//Random quote that displays in browser each time button clicked

// Quotes in an array
const quotes = [
    {quote: "test", source:"test", citation: "", year: 1982},
];
let quote;
//Create a funcation that creates HTML
function formQuote(){
//<p class="quote"> A random quote </p>
//<p class="source"> quote source </p>
}

//Create a function that picks a quote at random, indexOf???
function getRandomQuote(arr){
   let randomNumber = Math.floor(Math.random() * arr.length)+1;
   quote = inputArray[randomNumer]
   return quote
}

//Print message to the screen
function printQuote(message) {
    var outputDiv = document.getElementById('output');
    outputDiv.innerHTML = message;
  }

  //Auto refresh

  //background colour changes with quote

  console.log("Hello World!")