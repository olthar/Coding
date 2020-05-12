
const jobRole = document.getElementById("title");
const otherBox = document.getElementById("other-div")
const design = document.getElementById("design")
const color = document.getElementById("color")
const activities = document.querySelector(".activities")
const paymentInfo = document.getElementById("payment")
const creditcard = document.getElementById("credit-card")
const usernameInput = document.getElementById("name");
const emailInput = document.getElementById("mail");
const cardNumber = document.getElementById("cc-num");
const zipCode = document.getElementById("zip");
const cvv = document.getElementById("cvv");
const submit = document.getElementById("submit")
const fieldsToValidate = [usernameInput, emailInput, activities, cardNumber, zipCode, cvv]
const validators = [isValidUsername,isValidEmail, isValidActivites, isValidCCNumber, isValidZip, isValidCVV]
let hideElements = ["other-div", "colors-js-puns", "paypal", "bitcoin"]
let cost = 0;

//Function to create error messages where needed. 
function createErrorEmptyMessage(input){
    for (let i=0; i<input.length;i+=1){        
        const currentInput = input[i]
        const element = document.createElement('span')
        element.className = currentInput.name + "-error"
        element.style.color = "red"
        element.style.display = "none"
        if(currentInput.tagName == "INPUT"){
            currentInput.parentNode.insertBefore(element, currentInput)
        } else {
            element.textContent = "Please select one or more activity"
            currentInput.insertBefore(element, currentInput.firstElementChild);
        }
    }
}
//Call function to create error messages and leave them hidden
createErrorEmptyMessage(fieldsToValidate)

// Following functions check validity of inputs and return error messages depending on the requirements. 
function isValidUsername(username) {
    return [(username) ? true : false, ""]   
}
function isValidEmail(email) {
     const emailValid = [/^[A-Z0-9+_.-]+@[A-Z0-9.-]+$/i.test(email), "Email address is not valid"]
    return emailValid
}
function isValidActivites(activities) {
    return [(cost > 0) ? true : false, ""]   
}
function isValidCCNumber(number) {
    const ccNumValid = [/^\d{13,16}$/.test(number), "Credit card number needs to be between 13-16 digits long"]
    return ccNumValid
}
function isValidZip(zip) {
    const zipValid = [/^\d{5}$/.test(zip), "Needs to be 5 digits long"]
    return zipValid
}
function isValidCVV(cvv) {
    const cvvValid = [/^\d{3}$/.test(cvv), "Needs to be 3 digits long"]
    return cvvValid
}
//Function to show or hide error messages
function showHide(selected, show, text){
    const elementClass = "." + selected.name + "-error"
    const element = document.querySelector(elementClass)
    //if validator has returned true meaning input is valid don't show message
    if (show[0]){
        selected.style.borderColor = ""
        element.style.display = "none"
    // If activities are blank    
    } else if (selected.name == "activities"){
        element.style.display = ""
        //if invalid show make border red and show message
    } else {
        selected.style.borderColor = "red"
        element.style.display = ""
        //if input full but not valid show specific message
        if (text){
            element.textContent = show[1]
        } else {
            element.textContent = "Do not leave blank"
        }
    }
}
//Shows or hides elements by ID 
function hideShowElement(element, show){
    for (let i=0; i < element.length; i+=1){
        const elementDOM = document.getElementById(element[i])
        elementDOM.style.display = ((show) ? show : '')
    }
}
//Function to make the color display box have Tomato in the box rather than cornflower if I heart JS is selected. 
function selectElement(id, valueToSelect) {    
    let element = document.getElementById(id);
    element.value = valueToSelect;
}
//Create the total cost for activities
const total = document.createElement("h2")
activities.appendChild(total)
total.style.display = "none"

//Puts cursor in the username on form load
usernameInput.focus();

//Hide elements on load of page
hideShowElement(hideElements, "none")

//Text field revealed when other selected in the "Job Role". 
jobRole.addEventListener('change',(e) => {
    const jobRole = event.target.value;
    if (jobRole === 'other'){
        otherBox.style.display = "";
    } else { 
        otherBox.style.display = "none";;
    }    
});
 // Listener for change in color selection that provides a list of colors in relation to the selected theme. 
design.addEventListener('change',(e) => {
    const colors = color.children
    const designChoice = event.target.value;
    if (designChoice === 'js puns'){
        color.parentElement.style.display = ""
        for (let i=0;i<colors.length;i+=1){
            if (colors[i].value === "cornflowerblue" ||
                colors[i].value === "darkslategrey" ||
                colors[i].value === "gold")
                {colors[i].style.display = ""}
            else {colors[i].style.display = "none"} 
        }
    } else if (designChoice === 'heart js') { 
        color.parentElement.style.display = ""
        for (let i=0;i<colors.length;i+=1){
            if (colors[i].value === "tomato" ||
                colors[i].value === "steelblue" ||
                colors[i].value === "dimgrey")
                {colors[i].style.display = ""
                selectElement('color', 'tomato')
            }
            else {colors[i].style.display = "none"} 
        }
     //Hides color choice again if Design is deselected.    
    } else {color.parentElement.style.display = "none"}
});
//Listener for the activites checkboxes which grey out activities at conflicting times and creates a total cost at the bottom. 
activities.addEventListener('change', (e) => {
            const activityChosen = e.target;
            const dateTime = activityChosen.getAttribute("data-day-and-time")
            const activitiesList = activities.getElementsByTagName("input")
            const checkUncheck = activityChosen.checked
            const itemCost = parseInt(activityChosen.getAttribute("data-cost"))
            //Calculates the cost of the activities, adds cost if checked, removes if unchecked.
            if (checkUncheck === true){
                cost += itemCost
            } else {
                cost -= itemCost
            }
            // Grey out activities that conflict with time and date of chosen activity. 
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
    //Displays total for actvities if there is an activity selected.  
    if (cost === 0){
        total.style.display = "none"
        document.querySelector(".activities-error").style.display = ""

    } else {   
        total.textContent = `Total: \$${cost}`
        total.style.display = ""
        document.querySelector(".activities-error").style.display = "none"

    }
})
paymentInfo.addEventListener('change',(e) => {
    // Hide payment options that may have been previously chosen
    hideShowElement(["paypal", "bitcoin", "credit-card"], "none")
    const paymentChosen = e.target.value;
    //remove space from chosen payment value to give id for element to show based on selection. 
    const paymentOne = paymentChosen.replace(/\s/g, '-')
    hideShowElement([paymentOne])
});
//Trigger validation events based on input or submit button
function createListener(validators, list){
    return e => {  
        e.preventDefault()
        if (e.target.tagName == "BUTTON"){
            //takes the list of validators and list of elements to cycle through the validators
            for (let i=0; i < list.length;i+=1){
                const validator = validators[i]
                const text = list[i].value
                const validActive = validator(text)
                showHide(list[i], validActive, text)
            }
        } else {
            const text = e.target.value
            const valid = validators(text)
            showHide(e.target, valid, text)    
        }
    }
}
// Listeners for each part needing validation. 
usernameInput.addEventListener("input", createListener(isValidUsername));
emailInput.addEventListener("input", createListener(isValidEmail));
cardNumber.addEventListener("input", createListener(isValidCCNumber));
zipCode.addEventListener("input", createListener(isValidZip));
cvv.addEventListener("input", createListener(isValidCVV));
//If submit is clicked, the createListener function takes the list of validators and runs through each.
submit.addEventListener("click", createListener(validators, fieldsToValidate));

