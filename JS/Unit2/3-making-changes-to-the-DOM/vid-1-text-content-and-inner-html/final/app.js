const toggleList = document.getElementById('toggleList');
const listDiv = document.querySelector('.list');
const input = document.querySelector('input.description');
const descriptionP = document.querySelector('p.description');
const descriptionButton = document.querySelector('button.description');
const addItemInput = document.querySelector("input.addItemInput")
const addItemButton = document.querySelector("input.addItemButton")



toggleList.addEventListener('click', () => {
  if (listDiv.style.display == "none"){
    toggleList.textContent = "Hide List";
    listDiv.style.display = 'block';
  } else {
    toggleList.textContent = "Show List";
  listDiv.style.display = "none";
}})

descriptionButton.addEventListener('click', () => {
  descriptionP.innerHTML = input.value + ':';
});

addItemButton.addEventListener('click', () => {
  let li = document.createElement('li');
  li.textContent = addItemInput.value;
});

document.getElementById('myHeading').textContent = "THIS IS A TEST"

