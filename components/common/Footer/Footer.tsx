import s from './Footer.module.css';
import data from '../../../data';
import Image from 'next/image';
const Footer = () => {
  const content = data.data.footer;
  const links = content?.content?.filter(
    (content: any) => content.type === 'link'
  );
  const addresses = content?.content?.filter(
    (content: any) => content.type === 'address'
  );
  const numbers = content?.content?.filter(
    (content: any) => content.type === 'number'
  );

  return (
    <footer className={s.root}>
      <div className={s.wrap}>
        <figure className={s.logo}>
          <Image
            src="/logo-footer.png"
            alt="logo"
            width={202}
            height={42}
            layout="responsive"
            loading="eager"
          />
        </figure>
        <div className={s.address}>
          <h2>{content.title}</h2>
          {numbers?.map((number: any) => {
            return (
              <a
                className={s.link}
                key={number.title}
                target="_blank"
                rel="noreferrer"
                href={`tel:${number.title}`}
              >
                {number.title}: {number.content}
              </a>
            );
          })}
          {addresses?.map((address: any) => {
            return <div key={address.title}>{address.content}</div>;
          })}
        </div>
        <nav className={s.nav}>
          {links?.map((link: any, index: number) => (
            <a
              className={s.link}
              key={link.title}
              target="_blank"
              rel="noreferrer"
              href={link.link}
            >
              {link.title}
            </a>
          ))}
        </nav>
        <div>© {new Date().getUTCFullYear()} | Empyrean</div>
      </div>
    </footer>
  );
};
export default Footer;
