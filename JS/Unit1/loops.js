// guesses what the random number is. This is a test of GIT

let upper = 2500;
const randomNumber = getRandomNumber(upper);
let guess = 0;
let attempts = 0;

function getRandomNumber(upper){
  return Math.floor( Math.random() * upper ) + 1;
}
do{
guess = getRandomNumber(upper); 
attempts += 1; }while (guess !== randomNumber){
 
}

document.write(`The random number was ${randomNumber} 
It took the computer ${attempts} many attempts to get this right`);


// refactoring challenge result

var html = '';
var rgbColor;

function randomMath(){
    test = Math.floor(Math.random() * 256 );
    return Math.floor(Math.random() * 256 );
    console.log(test)
}

for (let i = 0; i < 10; i += 1) {
rgbColor = 'rgb(' + randomMath() + ',' + randomMath() + ',' + randomMath() + ')';
html += '<div style="background-color:' + rgbColor + '"></div>';
document.write(html);
}

