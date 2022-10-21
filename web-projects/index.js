window.onload= init();

let addBtn= document.getElementById("addBtn");

// let subtractBtn= document.getElementById("subtractBtn");

// let multiplyBtn= document.getElementById("multiplyBtn");

// let divideBtn= document.getElementById("divideBtn");

function init(){
    let addBtn= document.getElementById("addBtn");
   
    addBtn.addEventListener('click', onAddBtnClicked);

    // subtractBtn.addEventListener('click', onSubtractBtnClicked);

    // multiplyBtn.addEventListener('click', onMultiplyBtnClicked);

    // divideBtn.addEventListener('click', onDivideBtnClicked);

}

function onAddBtnClicked(){
    console.log('hey');

    let numberField1= document.getElementById("numberField1");
    let number1= Number(numberField1.value);
    console.log(number1);

    let numberField2= document.getElementById("numberField2");
    let number2= Number(numberField2.value);
    console.log(number2);

    
    let answerField= document.getElementById("answerField");
    let answer= Number(answerField.value);
    answer= number1+number2;
    console.log(answer);
    
    let equal= document.getElementsByClassName("answer");
    equal.innerText=answer;
    // ask kev on how to have the answer pop in the text box
}

function onSubtractBtnClicked(){
    console.log('hey');

    let numberField1= document.getElementById("numberField1");
    let number1= Number(numberField1.value);
    console.log(number1);

    let numberField2= document.getElementById("numberField2");
    let number2= Number(numberField2.value);
    console.log(number2);

    
    let answerField= document.getElementById("answerField");
    let answer= Number(answerField.value);
    answer= number-number2;
    console.log(answer);
    
    // ask kev on how to have the answer pop in the text box
}

function onMultiplyBtnClicked(){
    console.log('hey');

    let numberField1= document.getElementById("numberField1");
    let number1= Number(numberField1.value);
    console.log(number1);

    let numberField2= document.getElementById("numberField2");
    let number2= Number(numberField2.value);
    console.log(number2);

    
    let answerField= document.getElementById("answerField");
    let answer= Number(answerField.value);
    answer= number1*number2;
    console.log(answer);

    let equal= document.getElementsByClassName("answer")
    equal.innerText=answer;
    
    // ask kev on how to have the answer pop in the text box
}

function onDivideBtnClicked(){
    console.log('hey');

    let numberField1= document.getElementById("numberField1");
    let number1= Number(numberField1.value);
    console.log(number1);

    let numberField2= document.getElementById("numberField2");
    let number2= Number(numberField2.value);
    console.log(number2);

    
    let answerField= document.getElementById("answerField");
    let answer= Number(answerField.value);
    answer= number1/number2;
    console.log(answer);
    
    // ask kev on how to have the answer pop in the text box
}