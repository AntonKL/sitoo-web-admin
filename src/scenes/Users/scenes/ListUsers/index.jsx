import React, { useEffect } from 'react';
import { Table, Alert, PageHeader } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { actionCreators as actions } from '../../../../store/Users';
import AddUser from '../AddUser';
import columns from '../../helpers/renderColumns';

const Users = () => {
  const content = useSelector((state) => state.usersData);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(actions.getUsers());
  }, [dispatch]);

  const footer = () => `Total of ${content.totalcount} users`;

  const users = content.items.map((user) => ({
    ...user,
    key: user.userid,
  }));
  return (
    <div>
      <PageHeader
        title="Users"
        style={{ paddingTop: 24 }}
        extra={[
          <AddUser key="1" />,
        ]}
        avatar={{ src: 'https://avatars1.githubusercontent.com/u/8186664?s=460&v=4' }}
      />

      {content.hasError && <Alert message="An error occurred while fetching users. Please try again later, or contact Sitoo Support." type="error" style={{ marginLeft: 25, marginRight: 25, marginBottom: 16 }} />}

      <Table
        columns={columns}
        dataSource={users}
        scroll={{ x: 400 }}
        style={{ paddingLeft: 24, paddingRight: 24, paddingBottom: 8 }}
        footer={footer}
        loading={content.isLoading}
        pagination={{
          ...content.pagination,
          total: content.totalcount,
          page: content.pagination.current,
        }}
        onChange={(pagination) => dispatch(actions.getUsers(pagination))}
      />
    </div>
  );
};

export default Users;
