import operate from './operate';

const calculate = ({ total, next, operation }, buttonName) => {
  if (buttonName === '+/-') {
    [total, next].map(i => i * -1);
  }
  return operate(total, next, operation);
};

export default calculate;
