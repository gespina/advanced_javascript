let input = document.querySelector('input');
let inputDisplay = 0;
let firstNumber = 0;
let operator = '';
const readButton = (btn) => {
  let btnTxt = btn.srcElement.textContent;
  if (/[0-9.]/.test(btnTxt)) {
    input.value = input.value + btnTxt;
  } else if (/[\+\-\x\/]/.test(btnTxt)) {
    firstNumber = input.value;
    input.value = '';
    operator = btnTxt;
  } else if (btnTxt === '=') {
    switch (operator) {
      case '+':
        input.value = +firstNumber + +input.value;
        break;
      case '-':
        input.value = +firstNumber - +input.value;
        break;
      case '*':
        input.value = +firstNumber * +input.value;
        break;
      case '/':
        input.value = +firstNumber / +input.value;
        break;
    }
  }
};

let allButtons = [...document.querySelectorAll('button')].map((btn) =>
  btn.addEventListener('click', readButton)
);
