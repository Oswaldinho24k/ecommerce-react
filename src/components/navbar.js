import React, {Component} from 'react';
import { Menu, Icon } from 'antd';
import {Link} from 'react-router-dom';

const SubMenu = Menu.SubMenu;

class NavBar extends Component{
  render(){
    return(
      <Menu theme='dark'
        mode='horizontal'>

          <Menu.Item>
            <Link to="/">Home</Link>
          </Menu.Item>
          <Menu.Item>
            <Link to="/catalogo">Catalogo</Link>
          </Menu.Item>

      </Menu>
    );
  }
}

export default NavBar;
