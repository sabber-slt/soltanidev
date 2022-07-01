import React from 'react';
import DrawerMenu from './base/DrawerMenu';

interface Props {
  children: React.ReactNode;
}

const Layout: React.FC<Props> = ({ children }) => {
  return (
    <div>
      <DrawerMenu />
      {children}
    </div>
  );
};

export default Layout;
