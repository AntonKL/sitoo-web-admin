import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {
  Drawer, Button, Menu,
} from 'antd';
import { Link, useLocation } from 'react-router-dom';

const CollapsableMenu = ({ menu }) => {
  const [visible, setVisibility] = useState(false);
  const location = useLocation();
  return (
    <>
      <Button type="link" style={{ color: '#fff' }} onClick={() => setVisibility(true)} icon="menu" />
      <Drawer
        title="Main menu"
        placement="right"
        closable
        onClose={() => setVisibility(false)}
        visible={visible}
        bodyStyle={{ padding: 0 }}
      >
        <Menu
          mode="inline"
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
      </Drawer>
    </>
  );
};

CollapsableMenu.propTypes = {
  menu: PropTypes.arrayOf(
    PropTypes.shape({
      path: PropTypes.string,
      label: PropTypes.string,
      key: PropTypes.string,
    }),
  ).isRequired,
};

export default CollapsableMenu;
