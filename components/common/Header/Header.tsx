import Logo from '../../ui/Logo';
import TopNav from '../TopNav/TopNav';
import Link from 'next/link';
import s from './Header.module.css';
import cn from 'classnames';

import { useRouter } from 'next/router';

const Header = ({ className }: { className?: string }) => {
  const router = useRouter();

  return (
    <div
      className={cn(s.root, className, {
        [s.blue]: router.pathname !== '/',
        [s.white]: router.pathname === '/',
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
