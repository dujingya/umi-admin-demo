import React, { Component } from 'react';
import { Layout } from 'antd';
import style from './index.css'
import Router from 'umi/router';
import Navbar from './menu'
const { Header, Content, Footer } = Layout;
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const { children } = this.props
    console.log(this.props, 9999)
    return (
      <Layout className={style.container}>
        <Header className={style.head}>header</Header>
        <Navbar/>
        <Content className={style.content}>
          { children }
        </Content>
      </Layout>
    );
  }
}

export default App;
