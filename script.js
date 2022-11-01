 const submit =  document.getElementById('submit');
 const textBar = document.getElementById('textBar');
 const pText = document.getElementById('pText');
 const textContainer = document.querySelector('.pText-container');

// window.addEventListener('load', () => {
//   pText = JSON.parse(localStorage.getItem('toDo')) || [];
// })
submit.addEventListener('click', (e) => {
  e.preventDefault(); //prevents "form" from submitting 

    if (textBar.value === ""){
        alert("Put something on the list!"); 
        return;
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

  //local storage setItem
  // const storeToDo = textBar.value; 
  // localStorage.setItem('toDo', JSON.stringify(storeToDo));

  //values that are displayed on submit click
  // newDiv.appendChild(editButton);
  // newDiv.appendChild(delButton);
  newDiv.appendChild(para);
  pText.appendChild(newDiv);
  pText.appendChild(checkBox);
  pText.appendChild(para);
  pText.appendChild(editButton);
  pText.appendChild(delButton);

//edit current list item and save with local storage
editButton.addEventListener('click', () => {
    para.removeAttribute('readonly');
    para.focus();
    para.addEventListener('click', () => {
      para.setAttribute('readonly', true);
    })
});
//content uneditable on click away


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
