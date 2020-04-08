/*
function isFieldEmpty(){
    const field = document.querySelector(`#info`);
    if (!field.value){
      return true
    }else{
      return false 
    }
  }
  function getRandomNumber(numb){
    const randomNumber = Math.floor( Math.random() * numb ) + 1;
    return randomNumber;
  }
  
  
  
  const fieldTest = isFieldEmpty();
  
  if (fieldTest === true){
   alert('Please provide your information'); 
  }

 
  
  alert(getRandomNumber(10039));
  */
 function max(x,y){
    if (x > y){
      return x;
    } else {
      return y; 
    }
  }
// function expression
  const getRandomNumber = function (upper) {
    const randomNumber = Math.floor(Math.random() * upper ) + 1;
    return randomNumber;
  };
  
  getRandomNumber(100);
//arrow functions
  const getRandomNumber = (upper) => {
    const randomNumber = Math.floor( Math.random() * 6 ) + 1;
    return randomNumber;
  }
let randomNumber = (high,low) => Math.floor(Math.random() * (high - low + low)) + 1;

// or
function getRandomNumber (lower, upper){
if (isNaN(lower) || isNaN(upper)) {
    throw "Parameter is not a number!";
  }
  return Math.floor(Math.random() * (high - low + low)) + 1;
}
  
// default function parameters, if there is not value, it throws up the default, the first of the two will need an undefined argument to present that default. 
function sayGreeting(greeting = 'Good morning', name = 'student'){
    return `${greeting}, ${name}`;
    }
