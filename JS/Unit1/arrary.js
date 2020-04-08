let correct = [];
let incorrect = [];
let answer ;
let questions = [
  ['What is the capital of the UK', 'LONDON'],
  ['What is Olly\'s month of birth', 'MARCH'],
  ['What is the house called where Olly grew up', 'THE BEECHES']
  ['What is Olly\'s favourite colour', 'BLUE']
];

let message = `you got the following questions $("TEST")`;

function print(message) {
  var outputDiv = document.getElementById('output');
  outputDiv.innerHTML = message;
}

function buildList(arr) {
 var listHTML = '<ol>';
  for (var i = 0; i < arr.length; i += 1) {
    listHTML += '<li>' + arr[i] + '</li>';
  }
  listHTML += '</ol>';
  return listHTML;
}

for (let i = 0; i < questions.length ; i+=1 ){
  answer = prompt(questions[i][0]);
  if (answer.toUpperCase() == questions[i][1]){
    correct.push(questions[i][0]); 
  } else {
    incorrect.push(questions[i][0]);
  }  
 }


html = "You got " + correct.length + " question(s) right."
html += '<h2>You got these questions correct:</h2>';
html += buildList(correct);
html += '<h2>You got these questions wrong:</h2>';
html += buildList(incorrect);
print(html);