import React from 'react';
import { Layout } from 'antd';
import LargeMenu from '../LargeMenu';
import s from './Header.module.sass';
import CollapsableMenu from '../CollapsableMenu';
import menuItems from '../helpers/menuItems';
import useMedia from '../../../hooks/useMedia';
import { ReactComponent as Logo } from '../../../logo.svg';

const { Header } = Layout;

const PageHeader = () => {
  const collapseMenu = useMedia(
    // Media queries
    ['(min-width: 600px)'],
    [true],
    false,
  );
  let menu;
  if (collapseMenu) {
    menu = <LargeMenu menu={menuItems} />;
  } else {
    menu = <CollapsableMenu menu={menuItems} />;
  }

  return (
    <Header className={s['page-header']}>
      <div className={s.logo}><Logo /></div>
      {menu}
    </Header>
  );
};

export default PageHeader;
