import DrawerMenu from './base/DrawerMenu';
import Footer from './Footer';
import React from 'react';
interface Props {
  children: React.ReactNode;
}

const Layout: React.FC<Props> = ({ children }) => {
  return (
    <div>
      <DrawerMenu />
      <main>{children}</main>
      <Footer />
    </div>
  );
};
export default Layout;
