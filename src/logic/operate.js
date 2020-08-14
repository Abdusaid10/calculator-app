import Big from 'big.js';
// eslint-disable-next-line consistent-return
const operate = (numberOne, numberTwo, operation) => {
  // const numOne = Big(numberOne);
  // const numTwo = Big(numberTwo);
  const percentageBasedNum = Big(100);
  let total = 0;
  const operations = {
    '+': () => Big(numberOne).plus(Big(numberTwo) || 0),
    '-': () => Big(numberOne).minus(Big(numberTwo) || 0),
    '÷': () => Big(numberOne).div(Big(numberTwo) || 1),
    x: () => Big(numberOne).times(Big(numberTwo) || 1),
    '%': () => Big(numberOne).div(percentageBasedNum),
  };
  total = operations[operation]();
  return total.toString();
};

export default operate;
