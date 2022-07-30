import { FC } from 'react';
import Footer from '../../Footer';
import Header from '../Header';
// import s from './Layout.module.css';
const Layout: FC<{
  children: any;
}> = ({ children }) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
