function clearQuestion() {
  question.textContent = null;
  answer.textContent = null;
  varA = 0;
  varB = 0;
  operation = null;
}

function del() {
  const newText = question.textContent.slice(0,-1);
  question.textContent = newText;
  varA = newText;
}

function add(a, b) {
  answervar = a + b;
}

function subtract(a, b) {
  answervar = a - b;
}

function multiply(a, b) {
  answervar = a * b;
}

function divide(a, b) {
  answervar = a / b;
}

function operate() {
  if (operation == '+') add(parseFloat(varA), parseFloat(varB));
  if (operation == '-') subtract(parseFloat(varA), parseFloat(varB));
  if (operation == 'x') multiply(parseFloat(varA), parseFloat(varB));
  if (operation == '÷') divide(parseFloat(varA), parseFloat(varB));
  varA = answervar;
  varB = 0;
  answer.textContent = answervar;
}

let varA = 0;
let varB = 0;
let operation = null;
let answervar = 0;
const question = document.querySelector('.window');
const answer = document.querySelector('.answer');
const clear = document.querySelector('.ac');
const deleteNum = document.querySelector('.del');
const num = document.querySelectorAll('.num');
const operator = document.querySelectorAll('.op');
const equal = document.querySelector('.equal');

const buttonPress = document.querySelectorAll('.disp');     
buttonPress.forEach((button) => {                          // display 
  button.addEventListener('click', function (e) {          // ques  
    question.textContent += e.target.textContent;
  });
});

clear.addEventListener('click', clearQuestion);          //clear button
deleteNum.addEventListener('click', del);               //delete button

num.forEach((button) => {
  button.addEventListener('click', function (e) {         //set a and b
    if (operation == null) varA += e.target.textContent;  //values
    else varB += e.target.textContent;
  });
});

operator.forEach((button) => {                        // set operation
  button.addEventListener('click', function (e) {           
    if (operation == null) operation = e.target.textContent;
    else {
      operate();                  //FIX - issue after using = sign
      operation = e.target.textContent;
    }
  });
});

equal.addEventListener('click', operate);