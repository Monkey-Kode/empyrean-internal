import Link from 'next/link';
import s from './TopNav.module.css';
const TopNav = () => {
  return (
    <nav className={s.nav}>
      <Link href="/BenefitMaturityReport">Participate</Link>
    </nav>
  );
};
export default TopNav;
