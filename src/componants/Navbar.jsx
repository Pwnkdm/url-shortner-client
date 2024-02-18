import React, { useState } from 'react';
import { Menu, Layout } from 'antd';
import { Link } from 'react-router-dom';

const { Header } = Layout;

const Navbar = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [key, setKey] = useState('1');

  const handleBreakpoint = (broken) => {
    setIsMobile(broken);
  };

  const handleMenuClick = (event) => {
    setKey(event.key);
  };

  return (
    <Header>
      <Menu
        theme="dark"
        mode={isMobile ? 'vertical' : 'horizontal'}
        defaultSelectedKeys={['1']}
        selectedKeys={[key]}
        onSelect={handleMenuClick}
        onBreakpoint={handleBreakpoint}
      >
        <Menu.Item key="1">
          <Link to='/'>Home</Link>
        </Menu.Item>
        <Menu.Item key="2">
          <Link to='/logs'>Logs</Link>
        </Menu.Item>
        {/* <Menu.Item key="4">
          <Link to='/contact'>Contact</Link>
        </Menu.Item> */}
      </Menu>
    </Header>
  );
};

export default Navbar;
