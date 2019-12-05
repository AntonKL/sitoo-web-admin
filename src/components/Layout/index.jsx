import React from 'react';
import PropTypes from 'prop-types';
import { Layout, Breadcrumb } from 'antd';
import s from './index.module.sass';
import PageHeader from './Header';

const { Content, Footer } = Layout;

const PageLayout = ({ children }) => (
  <Layout className="layout">
    <PageHeader />
    <Content className={s.content}>
      <Breadcrumb style={{ margin: '16px 0' }}>
        <Breadcrumb.Item>Sitoo Web admin</Breadcrumb.Item>
      </Breadcrumb>
      <div style={{ background: '#fff', minHeight: 280 }}>{children}</div>
    </Content>
    <Footer style={{ textAlign: 'center' }}>Sitoo ©2019</Footer>
  </Layout>
);

export default PageLayout;

PageLayout.propTypes = {
  children: PropTypes.node.isRequired,
};
