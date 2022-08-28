function clearQuestion() {
  question.textContent = null;
  answer.textContent = null;
  varA = '';
  varB = '';
  operation = null;
  answervar = 0;
}

function del() {
  if (operation == null) {
    varA = varA.slice(0, -1)
    question.textContent = varA;
  } 
  else {
    varB = varB.slice(0, -1);
    question.textContent = varA + operation + varB;
  }

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
  varB = '';
  operation = null;
  answer.textContent = answervar;
}

let varA = '';
let varB = '';
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
  button.addEventListener('click', function (e) {         // ques
    question.textContent += e.target.textContent;
  });
});

clear.addEventListener('click', clearQuestion);          //clear button
deleteNum.addEventListener('click', del);               //delete button

num.forEach((button) => {
  button.addEventListener('click', function (e) {  
    if (operation == null && varB == '' && answervar !== 0) {
      clearQuestion();
      question.textContent = e.target.textContent;
    }
    if (operation == null) varA += e.target.textContent;  
    else varB += e.target.textContent;                   
  });
});

operator.forEach((button) => {                         // set operation
  button.addEventListener('click', function (e) {           
    if (operation == null) operation = e.target.textContent;
    else if (operation !== null && varB == '') return;
    else {
      operate();                 
      operation = e.target.textContent;
    }
  });
});

equal.addEventListener('click', operate);

// keyboard support
document.addEventListener('keydown', function (e) {
  if (e.key >= 0 && e.key <= 9) {
    document.getElementsByClassName(`n${e.key}`)[0].click();
    document.getElementsByClassName(`n${e.key}`)[0].focus();
  } 
  if (e.key === '.') {
    document.getElementsByClassName('dot')[0].click();
    document.getElementsByClassName('dot')[0].focus();
  }
  if (e.key === '+') {
    document.getElementsByClassName('plus')[0].click();
    document.getElementsByClassName('plus')[0].focus();
  }
  if (e.key === '-') {
    document.getElementsByClassName('minus')[0].click();
    document.getElementsByClassName('minus')[0].focus();
  }
  if (e.key === '/') {
    document.getElementsByClassName('divide')[0].click();
    document.getElementsByClassName('divide')[0].focus();
  }
  if (e.key === '*') {
    document.getElementsByClassName('mult')[0].click();
    document.getElementsByClassName('mult')[0].focus();
  }
  if (e.key === '=' || e.key === 'Enter') {
    document.getElementsByClassName('equal')[0].click();
    document.getElementsByClassName('equal')[0].focus();
  }
  if (e.key === 'Escape') {
    document.getElementsByClassName('ac')[0].click();
    document.getElementsByClassName('ac')[0].focus();
  }
  if (e.key === 'Backspace') {
    document.getElementsByClassName('del')[0].click();
    document.getElementsByClassName('del')[0].focus();
  }
})