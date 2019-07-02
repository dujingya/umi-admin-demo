import React, { Component } from 'react';
import { Menu, Icon } from 'antd';
import router from 'umi/router';
import style from './index.css';
const { SubMenu } = Menu;
class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      collapsed: false,
    };
  }
  toggleCollapsed = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  };
  currentTab = ({ item, key, keyPath, selectedKeys, domEvent }) => {
    router.push(key)
  }

  render() {
    return (
      <div className={style.menu}>
        <Menu
          defaultSelectedKeys={['1']}
          defaultOpenKeys={['sub1']}
          onSelect={this.currentTab}
          mode="inline"
          theme="dark"
          inlineCollapsed={this.state.collapsed}
        >
          <Menu.Item key="/option1">
            <Icon type="pie-chart" />
            <span>Option 1</span>
          </Menu.Item>
          <Menu.Item key="/option2">
            <Icon type="desktop" />
            <span>Option 2</span>
          </Menu.Item>
          <SubMenu
            key="sub1"
            title={
              <span>
                <Icon type="mail" />
                <span>Navigation One</span>
              </span>
            }
          >
            <Menu.Item key="/option3">
              <Icon type="inbox" />
              <span>Option 3</span>
            </Menu.Item>
            <Menu.Item key="/option5">Option 5</Menu.Item>
          </SubMenu>
        </Menu>
      </div>
    );
  }
}

export default Navbar;
