const toggleList = document.getElementById('toggleList');
const listDiv = document.querySelector('.list');
const descriptionInput = document.querySelector('input.description');
const descriptionP = document.querySelector('p.description');
const descriptionButton = document.querySelector('button.description');
const listUl = listDiv.querySelector('ul');
const addItemInput = document.querySelector('input.addItemInput');
const addItemButton = document.querySelector('button.addItemButton');
const lis = listUl.children;
const firstListItem = listUl.firstElementChild;
const lastListItem = listUl.lastElementChild;

firstListItem.style.backgroundColor = 'lightskyblue';
lastListItem.style.backgroundColor = 'lightsteelblue';

function attachListItemButtons (li) {
  let notTop = li.previousElementSibling;
  let notBottom = li.nextElementSibling
  let up = document.createElement("button");
  up.className = "up";
  up.textContent = "Up";
  if (notTop){
  li.appendChild(up);}
  let down = document.createElement("button");
  down.className = "down";
  down.textContent = "Down";
  if (notBottom){
  li.appendChild(down);}
  let remove = document.createElement("button");
  remove.className = "remove";
  remove.textContent = "Remove";
  li.appendChild(remove);
}
function newPosition(ul){
  let li = ul.children;
  for (let i=0; i <li.length ; i+=1){
    let element = li[i]
    while (element.firstElementChild) {
      element.removeChild(element.firstElementChild)
    }
    // li[i].querySelectorAll('*').forEach(n => n.remove());
  }
  for (let i = 0; i < lis.length ; i+=1){
    attachListItemButtons(lis[i]);
  }
}

function newPos (li){
  let notTop = li.previousElementSibling;
  let notBottom = li.nextElementSibling;
  let downButton = li.querySelector(".down")
  let upButton = li.querySelector(".up")
  let position = "test";  
  if (notTop == null){
    position = "top"
    li.removeChild(upButton)
  } else if (notBottom == null){
    position = "bottom"
    li.removeChild(downButton)
  } else {
    position = "middle"
    console.log(upButton)
  if (upButton == null){
    let up = document.createElement("button");
    up.className = "up";
    up.textContent = "Up";
  } else if (downButton == null){
    let down = document.createElement("button");
    down.className = "down";
    down.textContent = "Down";
    li.appendChild(down);
  }
  } 
  return position
}


for (let i = 0; i < lis.length ; i+=1){
  attachListItemButtons(lis[i]);
}


listUl.addEventListener('click', (event) => {
  if (event.target.tagName == 'BUTTON') {
    if (event.target.className == 'remove') {
      let li = event.target.parentNode;
      let ul = li.parentNode;
      ul.removeChild(li);
    }
    if (event.target.className == 'up') {
      let li = event.target.parentNode;
      let prevLi = li.previousElementSibling;
      let ul = li.parentNode;
      let top = ul.firstElementChild;
      if (prevLi) {
        ul.insertBefore(li, prevLi);
      } 
        newPosition(ul);
    }  
    if (event.target.className == 'down') {
      let li = event.target.parentNode;
      let nextLi = li.nextElementSibling;
      let ul = li.parentNode;
      if (nextLi) {
        ul.insertBefore(nextLi, li);
      }
      newPosition(ul);
    } 
  }
});

toggleList.addEventListener('click', () => {
  if (listDiv.style.display == 'none') {
    toggleList.textContent = 'Hide list';
    listDiv.style.display = 'block';
  } else {
    toggleList.textContent = 'Show list';                        
    listDiv.style.display = 'none';
  }                         
});

descriptionButton.addEventListener('click', () => {
  descriptionP.innerHTML = descriptionInput.value + ':';
  descriptionInput.value = '';
});

addItemButton.addEventListener('click', () => {
  let ul = document.getElementsByTagName('ul')[0];
  let li = document.createElement('li');
  li.textContent = addItemInput.value;
  attachListItemButtons(li);
  ul.appendChild(li);
  addItemInput.value = '';
});
  
  
  
  