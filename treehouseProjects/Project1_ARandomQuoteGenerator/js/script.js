/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance: 
  // Check the "Project Resources" section of the project instructions
  // Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat


  const quotes = [
    {quote: "They always say start at the bottom if you want to learn something. But suppose you want to learn to swim?", source:"Tommy Cooper"},
    {quote: "Do or do not, there is no try", source:"Yoda", citation: "The Empire Strikes Back", year: "A long time ago"},
    {quote: "I always knew I’d end up working for a Mickey Mouse outfit", source:"Disney employee"},
    {quote: "To be happy at home is the end of all human endeavour", source:"Samuel Johnson", year: 1750},
    {quote: "It Doesn’t Matter Who You Love or How You Love, But That You Love", source:"Rod McKuen", citation: "New York Times", year: 1971},
    {quote: "Forgiveness is giving up all hope of a better past.", source:"Rev. Don Felt", citation: "The Los Angeles Times", year: 1991},
    {quote: "In order to be irreplaceable one must always be different.", source:"Coco Chanel", citation: "Her Life, Her Secrets by Marcel Haedrich", year: 1971}
]
let message = printQuote(quotes);;

function getRandomQuote(arr){
   const randomNumber = Math.floor(Math.random() * (arr.length-1))+1;
   const randomQuote = arr[randomNumber];
   console.log(randomQuote.quote);
   return randomQuote
}

//Print quote function returns html to @message
function printQuote(i) {
  const messageQuote = getRandomQuote(i);
  let html = `<p class="quote"> ${messageQuote.quote} </p><p class="source"> ${messageQuote.source}`
  for ( var prop in messageQuote ) {
    console.log(prop);
    if (prop === "citation"){
      html += `<span class="citation"> ${messageQuote.citation}</span>`
    } else if (prop === "year"){
      html += `<span class="year"> ${messageQuote.year}</span>` 
    } else {
    continue
    }
  }
  html += `</p>`
  return html
}

document.getElementById('quote-box').innerHTML = message; 

/***
 * `printQuote` function
***/



/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);