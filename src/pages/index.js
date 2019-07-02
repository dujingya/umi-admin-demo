import React, { Component } from 'react';

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const style = {"height":'50px'}
    return (
      <div style={style}>
        首页
      </div>
    );
  }
}

export default Dashboard;
