import React from 'react';
import Display from './Display';
import ButtonPanel from './ButtonPanel';
// eslint-disable-next-line no-unused-vars
import calculate from '../logic/calculate';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      total: null,
      next: null,
      operation: null,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(buttonName) {
    const { total, next, operation } = this.state;
    const obj = calculate({ total, next, operation }, buttonName);
    this.setState({
      total: obj.total,
      next: obj.next,
      operation: obj.operation,
    });
  }

  render() {
    const { next, total } = this.state;
    const result = next || total;
    return (
      <div className="container">
        <Display result={result} />
        <ButtonPanel clickHandler={this.handleClick} />
      </div>
    );
  }
}

export { App as default };
