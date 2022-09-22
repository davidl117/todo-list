 const submit = document.getElementById('submit');
 const textBar = document.getElementById('textBar');
 const pText = document.getElementById('pText');
 

submit.addEventListener('click', function (){
    const para = document.createElement("p");
    para.innerText = textBar.value;
    if (textBar.value === ""){
        alert("Put something on the list!"); 
        return;
    };
    pText.appendChild(para);
    textBar.value = "";
    
    let button = document.createElement('button');
    button.innerHTML = 'Edit';
    pText.append(button);

    let delButton = document.createElement('button');
    delButton.innerHTML = 'Delete';
    pText.append(delButton);

    para.addEventListener('click', function(){
    para.style.textDecoration = 'line-through';
});
  para.addEventListener('dblclick', () =>{
    pText.removeChild(para);
  })
});





