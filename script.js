 const submit = document.getElementById('submit');
 const textBar = document.getElementById('textBar');
 const pText = document.getElementById('pText');

submit.addEventListener('click', function (){

    if (textBar.value === ""){
        alert("Put something on the list!"); 
        return;
    }
  
  //declaring values
  //para = the paragraph that is created for the list
  const para = document.createElement("p");
  para.innerText = textBar.value;

  const checkBox = document.createElement('input');
  checkBox.classList.add("checkbox");
  checkBox.setAttribute("type","checkbox");

  const editButton = document.createElement('button');
  editButton.classList.add('buttonStyle');
  editButton.innerText = 'Edit';

  const delButton = document.createElement('button');
  delButton.classList.add('buttonStyle');
  delButton.innerText = 'Delete';

  const saveButton = document.createElement('button');
  saveButton.innerText = 'Save';

  //session storage setItem
  const storeToDo = textBar.value; 
  localStorage.setItem('toDo', JSON.stringify(storeToDo));

  //values that are displayed on submit click
  pText.appendChild(para);
  pText.appendChild(editButton);
  pText.appendChild(delButton);
  pText.appendChild(checkBox);
  textBar.value = "";

//edit current list item and save with local storage
editButton.addEventListener('click', () => {
    para.contentEditable = true;
    para.focus();
    pText.appendChild(saveButton);
    saveButton.classList.add('buttonStyle');
  saveButton.addEventListener('click', () => {
     para.contentEditable = false;  
     saveButton.remove(saveButton);
     localStorage.setItem("toDo", JSON.stringify(storeToDo));
    });
})

  //session storage getItem
  //Might need to make into an array to store the values
  //Empty array?
  //unordered list?
  //need to be able to remove items when deleted by  user
  //edited items should overide current values
  //list items need to remain after refresh

  JSON.parse(localStorage.getItem('toDo'));  


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
    pText.removeChild(saveButton);    
  });
});


