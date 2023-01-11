 const submit =  document.getElementById('submit');
 const textBar = document.getElementById('textBar');
 const pText = document.getElementById('pText');
 const textContainer = document.querySelector('.pText-container');

 //displaying stored data on load
let storeTodoArr = [];
window.addEventListener('load', () => {
  tasks = JSON.parse(localStorage.getItem('toDo')) || [];
  if ( tasks === null){
    storeTodoArr = [];
  }else {
    storeTodoArr = tasks;
    storeTodoArr.forEach(Display);
    }
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

//local storage setItem
storeTodoArr.push(textBar.value);
localStorage.setItem('toDo', JSON.stringify(storeTodoArr));
Display();
});

 function Display(task, i) {
  //styling and creating elements
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
  newDiv.appendChild(para);
  pText.appendChild(newDiv);
  pText.appendChild(checkBox);
  pText.appendChild(para);
  pText.appendChild(editButton);
  pText.appendChild(delButton);


  localStorage.setItem('toDo', JSON.stringify(storeTodoArr));

  for (let i = 0; i < storeTodoArr.length; i++){
    if ( task !== undefined){
    task[i] = JSON.parse(localStorage.getItem('toDo')) || []; 
    para.value = task;
  }
}


    //edit content and save to local storage
editButton.addEventListener('click', () => {
    para.removeAttribute('readonly');
    para.focus();
    para.addEventListener('blur', () => {
      para.setAttribute('readonly', true);
      storeTodoArr.splice(storeTodoArr, 1, para.value) 
      localStorage.setItem('toDo', JSON.stringify(storeTodoArr));
    })
  })
console.log(storeTodoArr[i]);
console.log(task)

//add/remove line through text when box is clicked
checkBox.addEventListener('change', () => {
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
    localStorage.removeItem("toDo");
    
  })
} 
