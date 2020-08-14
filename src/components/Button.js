/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import PropTypes from 'prop-types';

// eslint-disable-next-line arrow-body-style
const Button = ({
  name, color, wide, clickHandler,
}) => {
  const style = {
    display: 'flex',
    fontSize: '25px',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: color,
    width: wide ? '50%' : '25%',
    borderRight: '3px solid rgb(198, 200, 206)',
    height: '100%',
  };
  const handleClick = name => {
    clickHandler(name);
  };
  return (
    // eslint-disable-next-line jsx-a11y/no-static-element-interactions
    <button type="button" style={style} onClick={() => handleClick(name)}>{name}</button>
  );
};

Button.propTypes = {
  // eslint-disable-next-line react/no-unused-prop-types
  name: PropTypes.string.isRequired,
  color: PropTypes.string,
  wide: PropTypes.bool,
  clickHandler: PropTypes.func.isRequired,
};

Button.defaultProps = {
  color: 'orange',
  wide: false,
};

export { Button as default };
