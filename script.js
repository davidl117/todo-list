 const submit =  document.getElementById('submit');
 const textBar = document.getElementById('textBar');
 const pText = document.getElementById('pText');
 const textContainer = document.getElementsByClassName('pText-container');


submit.addEventListener('click', function (){
    if (textBar.value === ""){
        alert("Put something on the list!"); 
        return;
    }
  
  //creating elements
  const para = document.createElement("p");
  const saveButton = document.createElement('button');
  const checkBox = document.createElement('input');
  const editButton = document.createElement('button');
  const delButton = document.createElement('button');

  checkBox.type = 'checkbox';
    //styles
  checkBox.classList.add('checkbox');
  editButton.classList.add('edit');
  delButton.classList.add('delete');
  para.classList.add('pText-container')

  para.innerText = textBar.value;
  saveButton.innerText = "Save";
  editButton.innerText = "Edit";
  delButton.innerText = "Delete";

  //local storage setItem
  const storeToDo = textBar.value; 
  localStorage.setItem('toDo', JSON.stringify(storeToDo));

  //values that are displayed on submit click
  pText.appendChild(checkBox);
  pText.appendChild(para);
  pText.appendChild(editButton);
  pText.appendChild(delButton);
  textBar.value = "";

//edit current list item and save with local storage
editButton.addEventListener('click', () => {
    para.contentEditable = true;
    para.focus();
});


  //local storage getItem
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
