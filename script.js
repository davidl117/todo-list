 const submit = document.getElementById('submit');
 const textBar = document.getElementById('textBar');
 const pText = document.getElementById('pText');

submit.addEventListener('click', function (){
    
    if (textBar.value === ""){
        alert("Put something on the list!"); 
        return;
    };

    const para = document.createElement("p");
    para.innerText = textBar.value;

    let checkBox = document.createElement('input');
    checkBox.setAttribute("type","checkbox");

    let button = document.createElement('button');
    button.classList.add('.noShow');
    button.innerHTML = 'Edit';

    let delButton = document.createElement('button');
    delButton.classList.add('.noShow');
    delButton.innerHTML = 'Delete';
        
    //values that are displayed on submit click
    pText.appendChild(para);
    pText.appendChild(button);
    pText.appendChild(delButton);
    pText.appendChild(checkBox);
    textBar.value = "";
    
//add/remove line through text when box is clicked
checkBox.addEventListener('click',() => {
    if (checkBox.checked == true) {
      para.style.textDecoration = 'line-through';
    }else {
     para.style.textDecoration = 'none';
  }
});


//removes list element
  delButton.addEventListener('click', () =>{
    pText.removeChild(para);
    pText.removeChild(delButton);
    pText.removeChild(button);
    pText.removeChild(checkBox);
  });
});



// if (checkBox === true){
//   linethrough
// }else no line

