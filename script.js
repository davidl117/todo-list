 const submit = document.getElementById('submit');
 const textBar = document.getElementById('textBar');
 const pText = document.getElementById('pText');

submit.addEventListener('click', function (){

    if (textBar.value === ""){
        alert("Put something on the list!"); 
        return;
    }
  
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
      
  //values that are displayed on submit click
  pText.appendChild(para);
  pText.appendChild(editButton);
  pText.appendChild(delButton);
  pText.appendChild(checkBox);
  textBar.value = "";
  
  //session storage/local storage
  const storeToDo = textBar.value; 
  sessionStorage.setItem('toDo', JSON.stringify(storeToDo));
  JSON.parse(sessionStorage.getItem('toDo'));  

//edit current list item
editButton.addEventListener('click', () => {
    para.contentEditable = true;
    para.focus();
    pText.appendChild(saveButton);

  saveButton.addEventListener('click', () => {
     para.contentEditable = false;  
     saveButton.remove(saveButton);
    })
})


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


