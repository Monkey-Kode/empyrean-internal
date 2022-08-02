import LogoIcon from '../../icons/LogoIcon';
import Link from 'next/link';
import s from './Footer.module.css';
const Footer = () => {
  return (
    <footer className={s.root}>
      <div className={s.wrap}>
        <LogoIcon />
        <div className={s.address}>
          <h2>Contact Info</h2>
          Main: <a href="tel:(281) 768-2900">(281) 768-2900</a>
          <br />
          Toll-Free: <a href="tel:(281) 768-2900">(800) 934-1451</a>
          <br />
          3010 Briarpark Drive, Suite 8000
          <br />
          Houston, TX 77042
        </div>
        <nav className={s.nav}>
          <a href="https://empyrean.com">Benefit Solutions</a>
          <a href="https://empyrean.com">Client Success</a>
          <a href="https://empyrean.com">Insights</a>
          <a href="https://empyrean.com">Company</a>
          <a href="https://empyrean.com">Get Demo</a>
          <a href="https://empyrean.com">Leadership</a>
          <a href="https://empyrean.com">Careers</a>
          <Link href="/contact">Contact Us</Link>
        </nav>
        <div>© EMPYREAN RESEARCH INSTITUTE, {new Date().getUTCFullYear()}</div>
      </div>
    </footer>
  );
};
export default Footer;
