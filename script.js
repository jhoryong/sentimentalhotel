// 변수 정의 부분

const calculator = document.querySelector('.calculator'); 
const buttons = calculator.querySelector('.calculator__buttons');
const firstOperend = document.querySelector('.calculator__operend--left'); 
const operator = document.querySelector('.calculator__operator'); 
const secondOperend = document.querySelector('.calculator__operend--right'); 
const calculatedResult = document.querySelector('.calculator__result'); 


// 계산 함수

function calculate(n1, operator, n2) {
  let result = 0;

  let number1 = Number(n1);
  let number2 = Number(n2);

  if (operator === '+')
    result = number1 + number2;
  else if (operator === '-')
    result =  number1 - number2;
  else if (operator === '*')
    result = number1 * number2;
  else
    result = number1 / number2;

  return String(result);
}


// 버튼 눌렀을 때

buttons.addEventListener('click', function (event) {

  const target = event.target; 
  const action = target.classList[0]; 
  const buttonContent = target.textContent; 
  // ! 위 코드(Line 19 - 21)는 수정하지 마세요.

  if (target.matches('button')) {
    if (action === 'number') {
      // 첫번째 칸에 숫자가 0인가? 
      if (firstOperend.textContent === '0') 
      {
        // 첫번째 칸에 숫자를 넣는다.
        firstOperend.textContent = buttonContent;
        return;
      }
      // 두번째 칸에 숫자가 입력된다.
      secondOperend.textContent = buttonContent;
    }

    if (action === 'operator') {
      operator.textContent = buttonContent;
    }

    if (action === 'decimal') {

    }

    if (action === 'clear') {
      firstOperend.textContent = '0';
      secondOperend.textContent = '0';
      calculatedResult.textContent = '0';
    }

    if (action === 'calculate') {

      // 1. 입력된 숫자를 계산한다.(첫번째 숫자, 연산자, 두번째 숫자)
      let currentNumber = firstOperend.textContent;
      let secondNumber = secondOperend.textContent;
      let operator1 = operator.textContent;
      let result = calculate(currentNumber, operator1, secondNumber);

      // 2. 계산이 완료된 숫자를 화면에 출력한다.
      calculatedResult.textContent = result;
    }
  }
});



// ! Advanced Challenge test와 Nightmare test를 위해서는 아래 주석을 해제하세요.

const display = document.querySelector('.calculator__display--for-advanced');

let currentNum, operatorForAdvanced, previousKey, previousNum, result;
// 얘내는 쓰라고 만들어놓은것. 안써도됨.
// 버퍼? 레지스터? 임시보관함.
let erase = false;
let hitDecimal = false;

buttons.addEventListener('click', function (event) {

  const target = event.target;
  const action = target.classList[0];
  const buttonContent = target.textContent;
  // ! 위 코드는 수정하지 마세요.

  // ! 여기서부터 Advanced Challenge & Nightmare 과제룰 풀어주세요.
  if (target.matches('button')) {
    if (action === 'number') {
      if (erase){
        display.textContent = buttonContent;
        erase = false;
        result = ''
      }

      // 0 일때는 안붙인다.
      else if(display.textContent === '0') {
        display.textContent = buttonContent;
      }

      else // 그게아니라면 뒤에 붙인다.
        display.textContent += buttonContent;
    }

    if (action === 'operator') {
      operatorForAdvanced = buttonContent;
      previousNum = display.textContent;
      erase = true;
      hitDecimal = false;
    }

    if (action === 'decimal') {
      if (!hitDecimal) {
        if (operatorForAdvanced && erase){
          display.textContent = '0';
          erase = false;
        }
        display.textContent += buttonContent;
        hitDecimal = true;
      }
    }

    if (action === 'clear') 
      display.textContent = '0';
      currentNum = '';
      previousNum = '';
      operatorForAdvanced = '';
      hitDecimal = false;
      result = 0;
    }
    if (action === 'calculate') {
      if (!operatorForAdvanced)
        return;
      if (result){
        previousNum = result;
      }
      else 
        currentNum = display.textContent;

      result = calculate(previousNum, operatorForAdvanced, currentNum);
      display.textContent = result;
      erase = true;
    }
  }

});
