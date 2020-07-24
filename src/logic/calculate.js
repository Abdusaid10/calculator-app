import operate from './operate';

const calculate = ({ total, next, operation }, buttonName) => {
  if (buttonName === '+/-') {
    [total, next].map(i => i * (-1));
  }
  if (buttonName === 'AC') {
    [total, next, operation].map(i => {
      // eslint-disable-next-line no-param-reassign
      i = null;
      return i;
    });
  }
  return operate(total, next, operation);
};

export default calculate;
