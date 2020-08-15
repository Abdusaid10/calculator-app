/* eslint-disable no-param-reassign */
import Big from 'big.js';

// eslint-disable-next-line consistent-return
const operate = (numberOne, numberTwo, operation) => {
  const percentageBasedNum = Big(100);
  numberOne = Big(numberOne);
  numberTwo = Big(numberTwo);

  if (operation === '+') {
    return numberOne.plus(numberTwo).toString();
  }
  if (operation === '-') {
    return numberOne.minus(numberTwo).toString();
  }
  if (operation === '÷') {
    return numberOne.div(numberTwo).toString();
  }
  if (operation === 'X') {
    return numberOne.times(numberTwo).toString();
  }
  if (operation === '%') {
    return numberOne.div(percentageBasedNum).toString();
  }
};

export default operate;
