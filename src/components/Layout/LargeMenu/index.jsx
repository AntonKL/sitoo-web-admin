import React from 'react';
import PropTypes from 'prop-types';
import { Menu } from 'antd';
import { Link, useLocation } from 'react-router-dom';

const LargeMenu = ({ menu }) => {
  const location = useLocation();
  return (
    <Menu
      theme="dark"
      mode="horizontal"
      defaultSelectedKeys={['users']}
      selectedKeys={[location.pathname]}
      style={{ lineHeight: '64px' }}
    >
      {menu.map((item) => (
        <Menu.Item key={item.path}>
          {item.label}
          <Link to={item.path} />
        </Menu.Item>
      ))}
    </Menu>
  );
};

LargeMenu.propTypes = {
  menu: PropTypes.arrayOf(
    PropTypes.shape({
      path: PropTypes.string,
      label: PropTypes.string,
      key: PropTypes.string,
    }),
  ).isRequired,
};

export default LargeMenu;
