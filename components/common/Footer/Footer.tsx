import LogoIcon from '../../icons/LogoIcon';
import Link from 'next/link';
import s from './Footer.module.css';
const Footer = () => {
  return (
    <footer className={s.root}>
      <div className={s.wrap}>
        <LogoIcon />
        <div className={s.address}>
          <p>
            <h2>Contact Info</h2>
            Main: <Link href="tel:(281) 768-2900">(281) 768-2900</Link>
            <br></br>
            Toll-Free: <a href="tel:(281) 768-2900">(800) 934-1451</a>
          </p>
          3010 Briarpark Drive, Suite 8000
          <br></br>
          Houston, TX 77042
        </div>
        <nav className={s.nav}>
          <Link href="/">Benefit Solutions</Link>
          <Link href="/">Client Success</Link>
          <Link href="/">Insights</Link>
          <Link href="/">Company</Link>
          <Link href="/">Get Demo</Link>
          <Link href="#">Leadership</Link>
          <Link href="#">Careers</Link>
          <Link href="#">Contact Us</Link>
        </nav>
        <div>© EMPYREAN RESEARCH INSTITUTE, {new Date().getUTCFullYear()}</div>
      </div>
    </footer>
  );
};
export default Footer;
