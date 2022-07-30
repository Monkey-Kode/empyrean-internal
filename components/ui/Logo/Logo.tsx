import s from './Logo.module.css';

const Logo = () => {
  return (
    <div className={s.root}>
      <span className={s.circle}></span>
      <h1 className={s.text}>Empyrean Research Institute</h1>
    </div>
  );
};

export default Logo;
