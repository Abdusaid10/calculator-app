import React from 'react';
import PropTypes from 'prop-types';
import Button from './Button';

// eslint-disable-next-line arrow-body-style
const ButtonPanel = ({ clickHandler }) => {
  const handleClick = buttonName => clickHandler(buttonName);

  return (
    <div className="btn-panel-container">
      <div className="group1">
        <Button key="AC" name="AC" color="rgb(207, 210, 214)" clickHandler={() => handleClick('AC')} />
        <Button key="+/-" name="+/-" color="rgb(207, 210, 214)" clickHandler={() => handleClick('+/-')} />
        <Button key="%" name="%" color="rgb(207, 210, 214)" clickHandler={() => handleClick('%')} />
        <Button key="÷" name="÷" clickHandler={() => handleClick('÷')} />
      </div>
      <div className="group2">
        <Button key="7" name="7" color="rgb(207, 210, 214)" clickHandler={() => handleClick('7')} />
        <Button key="8" name="8" color="rgb(207, 210, 214)" clickHandler={() => handleClick('8')} />
        <Button key="9" name="9" color="rgb(207, 210, 214)" clickHandler={() => handleClick('9')} />
        <Button key="x" name="x" clickHandler={() => handleClick('x')} />
      </div>
      <div className="group3">
        <Button key="4" name="4" color="rgb(207, 210, 214)" clickHandler={() => handleClick('4')} />
        <Button key="5" name="5" color="rgb(207, 210, 214)" clickHandler={() => handleClick('5')} />
        <Button key="6" name="6" color="rgb(207, 210, 214)" clickHandler={() => handleClick('6')} />
        <Button key="-" name="-" clickHandler={() => handleClick('-')} />
      </div>
      <div className="group4">
        <Button key="1" name="1" color="rgb(207, 210, 214)" clickHandler={() => handleClick('1')} />
        <Button key="2" name="2" color="rgb(207, 210, 214)" clickHandler={() => handleClick('2')} />
        <Button key="3" name="3" color="rgb(207, 210, 214)" clickHandler={() => handleClick('3')} />
        <Button key="+" name="+" clickHandler={() => handleClick('+')} />
      </div>
      <div className="group5">
        <Button key="0" name="0" color="rgb(207, 210, 214)" wide clickHandler={() => handleClick('0')} />
        <Button key="." name="." color="rgb(207, 210, 214)" clickHandler={() => handleClick('.')} />
        <Button key="=" name="=" clickHandler={() => handleClick('=')} />
      </div>
    </div>
  );
};

ButtonPanel.propTypes = {
  clickHandler: PropTypes.func.isRequired,
};

export {
  ButtonPanel as default,
};
