/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import {
  Dropdown, Menu, Icon, Modal,
} from 'antd';
import UpdateUser from '../scenes/UpdateUser';
import { actionCreators as actions } from '../../../store/Users';
import store from '../../../store/configurateStore';

const showConfirm = (record) => {
  Modal.confirm({
    title: 'Do you really want to delete this user?',
    content: 'This will permanently remove the user from the database. This action can not be undone.',
    onOk() {
      store.dispatch(actions.deleteUser(record.userid));
    },
    onCancel() {},
  });
};

const columns = [
  {
    title: 'Name',
    dataIndex: 'namefirst',
    ellipsis: true,
    render: (_text, record) => (
      <>
        {record.namefirst}
        {' '}
        {record.namelast}
      </>
    ),
  },
  {
    title: 'Email',
    dataIndex: 'email',
    ellipsis: true,
  },
  {
    title: 'Operations',
    dataIndex: 'operation',
    width: 110,
    fixed: 'right',
    render: (_text, record) => {
      const menu = (
        <Menu>
          <Menu.Item key="0">
            <UpdateUser user={record} />
          </Menu.Item>
          <Menu.Divider />
          <Menu.Item key="1">
            <a href="#" onClick={() => showConfirm(record)}>Delete</a>
          </Menu.Item>
        </Menu>
      );
      return (
        <Dropdown overlay={menu} trigger={['click']}>
          <a className="ant-dropdown-link" href="#">
            Actions
            <Icon type="down" />
          </a>
        </Dropdown>
      );
    },
  },
];

export default columns;
