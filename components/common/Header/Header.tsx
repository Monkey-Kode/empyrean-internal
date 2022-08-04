import Logo from '../../ui/Logo';
import TopNav from '../TopNav/TopNav';
import Link from 'next/link';
import s from './Header.module.css';
import cn from 'classnames';
import { useTheme } from '../../../framework/context/theme';

const Header = ({ className }: { className?: string }) => {
  const { state: themeColor } = useTheme();
  return (
    <div
      className={cn(s.root, className, {
        [s.blue]: themeColor.theme === 'blue',
        [s.white]: themeColor.theme === 'white',
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
