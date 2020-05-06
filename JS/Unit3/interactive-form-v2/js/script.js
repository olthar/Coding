const usernameInput = document.getElementById("name");
const jobRole = document.getElementById("title");
const otherBox = document.getElementById("other-div")
const design = document.getElementById("design")
const color = document.getElementById("colors-js-puns")
const activities = document.querySelector(".activities")
let cost = 0;

usernameInput.focus();
otherBox.style.display = "none"
color.style.display = "none"


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
    console.log(colors)
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
            console.log(checkUncheck)
            // Grey out activities that conflict with time and date of chosen one. 
            if (dateTime === null){
            } else { 
                    // let itemCost = parseInt(e.target.getAttribute("data-cost"))
                    // cost + itemCost
                    // console.log(cost)
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
})