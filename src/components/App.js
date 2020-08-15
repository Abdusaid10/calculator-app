import React from 'react';
import Display from './Display';
import ButtonPanel from './ButtonPanel';
// eslint-disable-next-line no-unused-vars
import calculate from '../logic/calculate';

const App = () => (
  <div className="container">
    <Display />
    <ButtonPanel />
  </div>
);

export { App as default };
