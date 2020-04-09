//Random quote that displays in browser each time button clicked

// Quotes in an array
const quotes = [
    {quote: "They always say start at the bottom if you want to learn something. But suppose you want to learn to swim?", source:"Tommy Cooper", citation: "" },
    {quote: "Do or do not, there is no try", source:"Yoda", citation: "The Empire Strikes Back", year: "A long time ago"},
    {quote: "I always knew I’d end up working for a Mickey Mouse outfit", source:"Disney employee", citation: "", year: ""},
    {quote: "To be happy at home is the end of all human endeavour", source:"Samuel Johnson", citation: "", year: 1750},
    {quote: "It Doesn’t Matter Who You Love or How You Love, But That You Love", source:"Rod McKuen", citation: "New York Times", year: 1971},
    {quote: "Forgiveness is giving up all hope of a better past.", source:"Rev. Don Felt", citation: "The Los Angeles Times", year: 1991},
    {quote: "In order to be irreplaceable one must always be different.", source:"Coco Chanel", citation: "Her Life, Her Secrets by Marcel Haedrich", year: 1971}
]
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