let input = document.querySelector('input');
let firstNumber = 0;
let operator = '';

const readButton = (btnTxt) => {
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
      case 'x':
        input.value = +firstNumber * +input.value;
        break;
      case '/':
        input.value = +firstNumber / +input.value;
        break;
    }
  } else {
    // for 'c'
    input.value = '';
  }
};

document
  .querySelectorAll('button')
  .forEach((btn) =>
    btn.addEventListener('click', ({ srcElement }) =>
      readButton(srcElement.textContent)
    )
  );
