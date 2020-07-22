import React from 'react';
import PropTypes from 'prop-types';

const Display = result => (<h2>{result}</h2>);

Display.propTypes = {
  result: PropTypes.string.isRequired,
};

Display.defaultProps = {
  result: 0,
};
export {
  Display as default,
};
