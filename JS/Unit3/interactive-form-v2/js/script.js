
const jobRole = document.getElementById("title");
const otherBox = document.getElementById("other-div")
const design = document.getElementById("design")
const color = document.getElementById("colors-js-puns")
const activities = document.querySelector(".activities")
const paymentInfo = document.getElementById("payment")
const creditcard = document.getElementById("credit-card")

const usernameInput = document.getElementById("name");
const emailInput = document.getElementById("mail");
const cardNumber = document.getElementById("cc-num");
const zipCode = document.getElementById("zip");
const cvv = document.getElementById("cvv");
const submit = document.getElementById("submit")

// submit.addEventListener('click',(e) => {
//         e.preventDefault();
//         console.log(e.target.tagName)
// })

// if user name is empty, sumbit will not work
function isValidUsername(username) {
    return (username) ? true : false   
}
function isValidEmail(email) {
    return /^[A-Z0-9+_.-]+@[A-Z0-9.-]+$/i.test(email)
}
function isValidActivites(activities) {
    return (cost > 0) ? true : false   
}
function isValidCCNumber(number) {
    return /^\d{13,16}$/.test(number)
}
function isValidZip(zip) {
    return /^\d{5}$/.test(zip)
}
function isValidCVV(cvv) {
    return /^\d{3}$/.test(cvv)
}
//add one for acticities
//clear previous ones
function errorEmptyMessage(input){
    input.style.borderColor = "red"
    const element = document.createElement('span')
    element.textContent = "Please fill in"
    element.style.color = "Red"
    input.parentNode.insertBefore(element, input)
}
function createListener(validator, input){
    return e => {  
        if(e.target.tagName === 'BUTTON'){
            e.preventDefault()
            text = input.value
            const valid = validator(text)
            console.log(valid)
            // const isValid = text !== "" && !valid
            valid ? "" : errorEmptyMessage(input)
            // errorInvalidMessage(input)
        }
    }
}
// usernameInput.addEventListener("input", createListener(isValidUsername));
submit.addEventListener("click", createListener(isValidUsername, usernameInput));
submit.addEventListener("click", createListener(isValidEmail, emailInput));
submit.addEventListener("click", createListener(isValidActivites, activities));
submit.addEventListener("click", createListener(isValidCCNumber, cardNumber));
submit.addEventListener("click", createListener(isValidZip, zipCode));
submit.addEventListener("click", createListener(isValidCVV, cvv));



//Create the total for activities
const total = document.createElement("h2")
activities.appendChild(total)
total.style.display = "none"

let cost = 0;

usernameInput.focus();



function hideShowElement(element, h){
    for (let i=0; i < element.length; i+=1){
        const elementDOM = document.getElementById(element[i])
        // console.log(elementDOM)
        elementDOM.style.display = ((h) ? h : '')
    }
}
let hide = ["other-div", "colors-js-puns", "paypal", "bitcoin"]
hideShowElement(hide, "none")

// console.log(activitiesList)

// for (let i=0 ; i < activitiesList.length; i+=1){
//     console.log(activitiesList[i].name)
// }

// activities.addEventListener('change',(e) => {
// console.log(event.target.name)

// })


//Text field revealed when other selected in the "Job Role". 
jobRole.addEventListener('change',(e) => {
    // e.preventDefault();
    const jobRole = event.target.value;
    if (jobRole === 'other'){
        otherBox.style.display = "";
        console.log(otherBox)
    } else { otherBox.style.display = "none";;
}    
 });

 // figure out how to show the first color is relevent for 1 heart JS
design.addEventListener('change',(e) => {
    // e.preventDefault();
    const colors = document.getElementById("color").children
    const designChoice = event.target.value;
    if (designChoice === 'js puns'){
        color.style.display = ""
        for (let i=0;i<colors.length;i+=1){
            if (colors[i].value === "cornflowerblue" ||
                colors[i].value === "darkslategrey" ||
                colors[i].value === "gold")
                {colors[i].style.display = ""}
            else {colors[i].style.display = "none"} 
        }
    } else if (designChoice === 'heart js') { 
        color.style.display = ""
        for (let i=0;i<colors.length;i+=1){
            if (colors[i].value === "tomato" ||
                colors[i].value === "steelblue" ||
                colors[i].value === "dimgrey")
                {colors[i].style.display = ""}
            else {colors[i].style.display = "none"} 
        }
    } else {color.style.display = "none"}

});



//Hide colors not relating to the selected Design and no color option when nothing selecting.

//prevent workshops being selected at the same time
// running total for the selected activities. 

//display payment sections based on the choice of payment. 
//not allowed to submit unless form is correct

//validation errors
//name field can't be blank
//email must be vailidly formatted. 
//user must select at least one checkbox under the "Register for Activities"
//Credit car details must be right

//form validation messages, errors, let user know which box needs ammending. 

//work without JS
// for (let i=0 ; i < activitiesList.length; i+=1){
//     console.log(activitiesList[i].name)
// }

// activities.addEventListener('change',(e) => {
//     const dateTime = e.target.getAttribute("data-day-and-time")
//     console.log(dateTime)

// })


activities.addEventListener('change', (e) => {
//     if(e.target.tagName === 'CHECKBOX'){
            const activityChosen = e.target.name;
            const dateTime = e.target.getAttribute("data-day-and-time")
            const activitiesList = activities.getElementsByTagName("input")
            const checkUncheck = e.target.checked
            let itemCost = parseInt(e.target.getAttribute("data-cost"))
            //Calculates the cost of the activities
            if (checkUncheck === true){
                cost += itemCost
            } else {
                cost -= itemCost
            }
            console.log(itemCost)
            console.log(cost)
            // Grey out activities that conflict with time and date of chosen one. 
            if (dateTime === null){
            } else { 
                    for (let i = 0; i < activitiesList.length; i++) {
                        const choseDateTime = activitiesList[i].getAttribute("data-day-and-time")
                        if (choseDateTime == dateTime && !activitiesList[i].checked && checkUncheck){     
                            activitiesList[i].disabled = "disabled"
                            activitiesList[i].parentElement.style.color = "grey"
                        } else if (choseDateTime == dateTime && activitiesList[i].parentElement.style.color == "grey"){
                            activitiesList[i].disabled = ""
                            activitiesList[i].parentElement.style.color = ""
                        }
                    }
            }
    //Displays total for actvities if there is one. 
    if (cost === 0){
        total.style.display = "none"

    } else {   
        total.textContent = `Total: \$${cost}`
        total.style.display = ""
    }
})

paymentInfo.addEventListener('change',(e) => {
    // const paymentTypes = paymentInfo.parentElement.getElementsByTagName("div")
    // console.log(paymentTypes)
    // Hide elements previously chosen
    hideShowElement(["paypal", "bitcoin", "credit-card"], "none")
    const paymentChosen = e.target.value;
    //remove space from chosen payment
    const paymentOne = paymentChosen.replace(/\s/g, '-')
    hideShowElement([paymentOne])


});


