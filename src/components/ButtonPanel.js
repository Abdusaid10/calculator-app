import React from 'react';
import Button from './Button';

// eslint-disable-next-line arrow-body-style
const ButtonPanel = () => {
  return (
    <div className="btn-panel-container">
      <div className="group1">
        <Button name="AC" color="rgb(207, 210, 214)" />
        <Button name="+/-" color="rgb(207, 210, 214)" />
        <Button name="%" color="rgb(207, 210, 214)" />
        <Button name="÷" />
      </div>
      <div className="group2">
        <Button name="7" color="rgb(207, 210, 214)" />
        <Button name="8" color="rgb(207, 210, 214)" />
        <Button name="9" color="rgb(207, 210, 214)" />
        <Button name="X" />
      </div>
      <div className="group3">
        <Button name="4" color="rgb(207, 210, 214)" />
        <Button name="5" color="rgb(207, 210, 214)" />
        <Button name="6" color="rgb(207, 210, 214)" />
        <Button name="-" />
      </div>
      <div className="group4">
        <Button name="1" color="rgb(207, 210, 214)" />
        <Button name="2" color="rgb(207, 210, 214)" />
        <Button name="3" color="rgb(207, 210, 214)" />
        <Button name="+" />
      </div>
      <div className="group5">
        <Button name="0" color="rgb(207, 210, 214)" wide />
        <Button name="." color="rgb(207, 210, 214)" />
        <Button name="=" />
      </div>
    </div>
  );
};

export {
  ButtonPanel as default,
};
