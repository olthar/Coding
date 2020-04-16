const myList = document.getElementsByTagName('li');

for (let i = 0; i < myList.length; i += 1){
        myList[i].style.color = "black";
}

const errorNotPurple = document.getElementsByClassName('error-not-purple');
// const errorNotPurple = document.querySelectorAll(".error-not-purple")

for (let i = 0; i < errorNotPurple.length; i += 1){
    errorNotPurple[i].style.color = "red";
}

const evens = document.querySelectorAll('li:nth-child(even)');

for (let i = 0; i < evens.length; i += 1){
        evens[i].style.backgroundColor = "lightgrey";
}
// var listItems = querySelectorAll(("#myButton");
// var colors = ["#C2272D", "#F8931F", "#FFFF01", "#009245", "#0193D9", "#0C04ED", "#612F90"];

for(var i = 0; i < colors.length; i ++) {
  listItems[i].style.color = colors[i];    
}

// const myHeading = document.getElementsByTagName("h1")[0];
// const myButton = document.getElementById("myButton");
// const myTextInput = document.getElementById("myTextInput");


// myButton.addEventListener('click', () => {
//       myHeading.style.color = myTextInput.value;                     
//                            });