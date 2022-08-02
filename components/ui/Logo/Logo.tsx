import s from './Logo.module.css';
import cn from 'classnames';
const Logo = () => {
  return (
    <div className={s.root}>
      <span className={cn(s.circle)}></span>
      <div className={s.text}>Empyrean Research Institute</div>
    </div>
  );
};

export default Logo;
