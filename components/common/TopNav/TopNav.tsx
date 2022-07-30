import Link from 'next/link';
import s from './TopNav.module.css';
const TopNav = () => {
  return (
    <nav className={s.nav}>
      <Link href="/">Participate</Link>
      <div>|</div>
      <Link href="/">Contact</Link>
    </nav>
  );
};
export default TopNav;
