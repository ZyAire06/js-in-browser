window.onload= init();

let greetBtn = document.getElementById('greetBtn');

greetBtn.addEventListener('click', onGreetUserBtnClicked);
function init(){
 onGreetUserBtnClicked();

}

function onGreetUserBtnClicked(){
    console.log(`hey`);
    let nameField = document.getElementById('nameField');
    let name = nameField.value;
    console.log('name');
    let greeting = `Hello ${name}`;
    window.alert(greeting);
  
}