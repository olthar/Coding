/* 
  1. Store correct answers
   - When quiz begins, no answers are correct
*/
let correctAnswer = 0;
let question = "What is my favourite";



// 2. Store the rank of a player
let rank = "";

// 3. Select the <main> HTML element

/*
  4. Ask at least 5 questions
   - Store each answer in a variable
   - Keep track of the number of correct answers
*/
let alternative = " Colour?"
if (prompt(question + alternative).toUpperCase() === 'BLUE'){
  correctAnswer += 1; 
}

alternative = " Car?"
if (prompt(question + alternative).toUpperCase() === 'JEEP'){
  correctAnswer += 1; 
}
alternative = " Dog?"
if (prompt(question + alternative).toUpperCase() === 'WHISKY'){
  correctAnswer += 1; 
}
alternative = " Jeans?"
if (prompt(question + alternative).toUpperCase() === 'NUDIE'){
  correctAnswer += 1; 
}
alternative = " Number?"
if (prompt(question + alternative) === 23){
  correctAnswer += 1; 
}

console.log(correctAnswer);


/*
  5. Rank player based on number of correct answers
   - 5 correct = Gold
   - 3-4 correct = Silver
   - 1-2 correct = Bronze
   - 0 correct = No crown
*/
  if (correctAnswer > 4){
    rank = "Gold";
  }else if (correctAnswer<5 && correctAnswer > 2){
    rank = "Silver";
  } else if (correctAnswer <4 && correctAnswer >0){
    rank = "Bronze";
  }else {
    rank = "No Crown";    
  
  }


let message = `<h2> Olivers rank is ${rank} </h2>`;
document.querySelector('main').innerHTML = message;