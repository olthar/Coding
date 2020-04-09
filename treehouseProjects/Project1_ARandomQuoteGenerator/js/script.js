// Quotes are displayed at random and can be changed when button pressed. 

// quotes array
  const quotes = [
    {quote: "They always say start at the bottom if you want to learn something. But suppose you want to learn to swim?", source:"Tommy Cooper",tags: ["Humour", "UK"] },
    {quote: "Do or do not, there is no try", source:"Yoda", citation: "The Empire Strikes Back", year: "A long time ago", tags: ["Movie", "Dagobah"]},
    {quote: "I always knew I’d end up working for a Mickey Mouse outfit", source:"Disney employee", tags:["Humour", "USA"]},
    {quote: "To be happy at home is the end of all human endeavour", source:"Samuel Johnson", year: 1750, tags: ["Motivational", "USA"]},
    {quote: "It Doesn’t Matter Who You Love or How You Love, But That You Love", source:"Rod McKuen", citation: "New York Times", year: 1971,tags: ["Motivational", "USA"]},
    {quote: "Forgiveness is giving up all hope of a better past.", source:"Rev. Don Felt", citation: "The Los Angeles Times", year: 1991,tags: ["Motivational", "USA"]},
    {quote: "In order to be irreplaceable one must always be different.", source:"Coco Chanel", citation: "Her Life, Her Secrets by Marcel Haedrich", year: 1971,tags: ["Motivational", "France"]}
]

let rgbColor;
let currentQuote = "none";
let messageQuote ;
let html;

//get initial quote
printQuote(quotes);


// Returns an RGB number for the random background function
function randomRGB() {
  let rgb = Math.floor(Math.random() * 256 ); 
  return rgb ;
 }
 
 //returns an RGB string to the background colour
 function randomBG() {
   let color = "rgb(" + randomRGB()+','+randomRGB()+','+randomRGB()+")";
   return color;
 }

// Gerates a quote from the Quotes array
function getRandomQuote(arr){  
  const randomNumber = Math.floor(Math.random() * (arr.length-1))+1;
  const randomQuote = arr[randomNumber];
  return randomQuote;
}

//Print quote function returns html
function printQuote() {
  do { //repeat the process of generating quote if same quote is chosen twice
    messageQuote = getRandomQuote(quotes);
    html = `<p class="quote"> ${messageQuote.quote} </p><p class="source"> ${messageQuote.source}`
    for ( var prop in messageQuote ) {
      if (prop === "citation"){
        html += `<span class="citation"> ${messageQuote.citation}</span>`
      } else if (prop === "year"){
        html += `<span class="year"> ${messageQuote.year}</span>` 
      } else if (prop === "tags"){
        html += `</p><p class="tags"> ${messageQuote.tags.join(', ')}`
      } 
    }
    html += `</p>`
    document.body.style.background =  randomBG();
  } while (currentQuote === messageQuote); // not repeat the last quote
  currentQuote = messageQuote;
  return document.getElementById('quote-box').innerHTML = html;
}

// changes quote every 5 seconds 
setInterval(printQuote, 10000);

// button loads new quote
document.getElementById('load-quote').addEventListener("click", printQuote, false);