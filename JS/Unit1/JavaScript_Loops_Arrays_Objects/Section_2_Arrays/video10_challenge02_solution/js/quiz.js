var questions = [
  ['How many states are in the United States?', 50],
  ['How many continents are there?', 7],
  ['How many legs does an insect have?', 6]
];
var correctAnswers = 0;
var question;
var answer;
var response;
var correct = [];
var wrong = [];

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

for (var i = 0; i < questions.length; i += 1) {
  question = questions[i][0];
  answer = questions[i][1];
  response = prompt(question);
  response = parseInt(response);
  if (response === answer) {
    correctAnswers += 1;
    correct.push(question);
  } else {
    wrong.push(question);
  }
}

html = "You got " + correctAnswers + " question(s) right."
html += '<h2>You got these questions correct:</h2>';
html += buildList(correct);
html += '<h2>You got these questions wrong:</h2>';
html += buildList(wrong);
print(html);


















let correct = [];
let incorrect = [];
let answer ;
let questions = [
  ['What is the capital of the UK', 'LONDON'],
  ['What is Olly\'s month of birth', 'MARCH'],
  ['What is the house called where Olly grew up', 'THE BEECHES']
];

let message = `you got the following questions $("TEST")`;

function buildList(arr) {
 var listHTML = '<ol>';
  for (var i = 0; i < arr.length; i += 1) {
    listHTML += '<li>' + arr[i] + '</li>';
  }
  listHTML += '</ol>';
  return listHTML;
}

for (let i = 0; i <= questions.length ; i+=1 ){
  answer = prompt(questions[i][0]);
  if (answer.toUpperCase() == questions[i][1]){
    alert ('correct');
    correct.push(questions[i][0]);
    alert (correct);
  } else {
   alert ('wrong DUMBASS');
    incorrect.push(questions[i][0]);
    alert (incorrect);
  }  
 }


function print(message) {
  document.write(message);
}



html = `"You got " + correctAnswers + " question(s) right." '<h2>You got these questions correct:</h2>'; $(buildList(correct))`;
html += '<h2>You got these questions wrong:</h2>';
html += buildList(wrong);
document.print(html);