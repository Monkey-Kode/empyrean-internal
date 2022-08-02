import Logo from '../../ui/Logo';
import TopNav from '../TopNav/TopNav';
import Link from 'next/link';
import s from './Header.module.css';
import cn from 'classnames';
import { useContext } from 'react';
import { ThemeContext } from '../../../framework/context/theme';
const Header = ({ className }: { className?: string }) => {
  const { theme } = useContext(ThemeContext);

  return (
    <div
      className={cn(s.root, className, {
        [s.blue]: theme == 'blue',
      })}
    >
      <header className={cn(s.header)}>
        <Link href="/">
          <a className={s.link}>
            <Logo />
          </a>
        </Link>
        <TopNav />
      </header>
    </div>
  );
};
export default Header;
