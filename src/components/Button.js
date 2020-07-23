import React from 'react';
import PropTypes from 'prop-types';

// eslint-disable-next-line arrow-body-style
const Button = ({ name, color, wide }) => {
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
  return (
    <div style={style}>{name}</div>
  );
};

Button.propTypes = {
  // eslint-disable-next-line react/no-unused-prop-types
  name: PropTypes.string.isRequired,
  color: PropTypes.string,
  wide: PropTypes.bool,
};

Button.defaultProps = {
  color: 'orange',
  wide: false,
};

export { Button as default };
