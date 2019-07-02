import React, { Component } from 'react';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const style = {"height":'50px'}
    return (
      <div style={style}>
        Home 页面
      </div>
    );
  }
}

export default Home;
