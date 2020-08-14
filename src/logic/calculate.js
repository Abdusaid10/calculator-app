import operate from './operate';

const calculate = (data, buttonName) => {
  let { total, next, operation } = data;

  const ops = (t, n, o) => {
    if (next === null) {
      operation = buttonName;
    } else {
      total = operate(t, n, o);
      next = null;
    }
  };

  const operations = {
    AC: () => {
      total = null;
      next = null;
      operation = null;
    },
    '+/-': () => {
      if (next !== null) {
        next = (next * -1).toString();
      } else {
        total = (total * -1).toString();
      }
    },
    '+': () => ops(total, next, operation),
    '-': () => ops(total, next, operation),
    x: () => ops(total, next, operation),
    '÷': () => ops(total, next, operation),
    '%': () => ops(total, next, operation),
    '.': () => {
      if (total === null) total = '0';
      if (operation === null && !total.includes('.')) {
        total += '.';
      } else if (operation && !next.includes('.')) {
        next += '.';
      }
    },
    '=': () => {
      if (total && next) {
        ops(total, next, operation);
        next = null;
        operation = null;
      }
    },
  };

  if (operations[buttonName] === undefined) {
    if (operation === '=') {
      total = buttonName;
      operation = null;
    } else if (operation === null) {
      total = total === null || total === 0 ? buttonName : total += buttonName;
    } else {
      next = next === null || next === 0 ? buttonName : next += buttonName;
    }
  } else {
    operations[buttonName]();
  }
  return { total, next, operation };
};

export default calculate;
