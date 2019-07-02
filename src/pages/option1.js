import React, { Component } from 'react';

class Option1 extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const style = {"height":'50px'}
    return (
      <div style={style}>
        Option1
      </div>
    );
  }
}

export default Option1;
