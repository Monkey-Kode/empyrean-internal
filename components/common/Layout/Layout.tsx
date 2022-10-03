import { FC, ReactNode, useContext } from 'react';
import Footer from '../Footer';
import Header from '../Header/Header';
import cn from 'classnames';
import s from './Layout.module.css';
import { ThemeProvider } from '../../../framework/context/theme';
import Background from '../Background';
import Alert from '../Alert/Alert';

const Layout: FC<{
  children: ReactNode;
}> = ({ children }) => {
  return (
    <ThemeProvider>
      <div className={cn(s.root)}>
        <Alert message="INTERNAL EXPERIENCE ONLY" />
        <Background />
        <Header />
        {children}
        <Footer />
      </div>
    </ThemeProvider>
  );
};
export default Layout;
