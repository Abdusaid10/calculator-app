import React from 'react';
import PropTypes from 'prop-types';

// eslint-disable-next-line arrow-body-style
const Button = ({ name }) => {
  return (
    <div>{name}</div>
  );
};

Button.propTypes = {
  // eslint-disable-next-line react/no-unused-prop-types
  name: PropTypes.string.isRequired,
};

export { Button as default };
