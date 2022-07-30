import Logo from '../../ui/Logo';
import TopNav from '../TopNav/TopNav';
import s from './Header.module.css';
const Header = () => {
  return (
    <header className={s.root}>
      <Logo />
      <TopNav />
    </header>
  );
};

export default Header;
