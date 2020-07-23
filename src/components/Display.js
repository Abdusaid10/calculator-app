/* eslint-disable react/default-props-match-prop-types */
import React from 'react';
import PropTypes from 'prop-types';

const Display = ({ result }) => (<div className="display"><h2>{result}</h2></div>);

Display.propTypes = {
  // eslint-disable-next-line react/require-default-props
  result: PropTypes.string.isRequired,
};

Display.defaultProps = {
  result: '0',
};
export {
  Display as default,
};
