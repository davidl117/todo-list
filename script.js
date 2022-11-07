 const submit =  document.getElementById('submit');
 const textBar = document.getElementById('textBar');
 const pText = document.getElementById('pText');
 const textContainer = document.querySelector('.pText-container');

 //displaying stored data on load
//  var storeTodo = [];
window.addEventListener('load', () => {
  tasks = JSON.parse(localStorage.getItem('toDo'));
  if ( tasks === null){
    storeTodo = [];
  }else {
    storeTodo = tasks;
  }
  localStorage.setItem('toDo', JSON.stringify(storeTodo));
  storeTodo.push(textBar.value);
   JSON.parse(localStorage.getItem('toDo'));
  console.log(storeTodo);
  Display();
})


//prevents "form" from submitting 
submit.addEventListener('click', (e) => {
  e.preventDefault(); 
});

submit.addEventListener('click', () => { 
    if (textBar.value === ""){
        alert("Put something on the list!"); 
        return;
    }   

if (JSON.parse(localStorage.getItem('toDo')) === null) {
  storeTodo = [];
}else {
  storeTodo = JSON.parse(localStorage.getItem('toDo'))
}
//local storage setItem
storeTodo.push(textBar.value);
localStorage.setItem('toDo', JSON.stringify(storeTodo));
JSON.parse(localStorage.getItem(storeTodo));
Display();
});

 function Display() {
  let tasks = JSON.parse(localStorage.getItem('toDo')); 
  if (tasks === null) {
    storeTodo = [];
  }else {
    storeTodo = tasks;
  }

  //creating elements
  const newDiv = document.createElement('div');
  newDiv.classList.add('pText-container');

  const para = document.createElement("input");
  para.type = 'text';
  para.value = textBar.value;
  para.setAttribute('readonly', true);
  para.classList.add('pText');

  const checkBox = document.createElement('input');
  checkBox.type = 'checkbox';

  const editButton = document.createElement('button');
  editButton.classList.add('edit');
  editButton.innerText = "Edit";

  const delButton = document.createElement('button');
  delButton.classList.add('delete');
  delButton.innerText = "Delete";

  textBar.value = "";

  //values that are displayed on submit click
  // newDiv.appendChild(editButton);
  // newDiv.appendChild(delButton);
  newDiv.appendChild(para);
  pText.appendChild(newDiv);
  pText.appendChild(checkBox);
  pText.appendChild(para);
  pText.appendChild(editButton);
  pText.appendChild(delButton);

//  localStorage.setItem('toDo', JSON.stringify(storeTodo));

//content uneditable on click away
editButton.addEventListener('click', () => {
    para.removeAttribute('readonly');
    para.focus();
    para.addEventListener('blur', () => {
      para.setAttribute('readonly', true);
      // localStorage.setItem('toDo', JSON.stringify(storeTodo));

    })
});


//add/remove line through text when box is clicked
checkBox.addEventListener('click',() => {
    if (checkBox.checked == true) {
      para.style.textDecoration = 'line-through';
    }else {
     para.style.textDecoration = 'none';
  }
})

//removes list element when delete button clicked
  delButton.addEventListener('click', () =>{
    pText.removeChild(para);
    pText.removeChild(delButton);
    pText.removeChild(editButton);
    pText.removeChild(checkBox);
    pText.removeChild(newDiv); 
    // newDiv.removeChild(editButton);
    // newDiv.removeChild(delButton);
    // localStorage.removeItem('toDo');//might need parameter of e
  
  }); 
 }
