import { FC } from 'react';
import s from './Button.module.css';
import cn from 'classnames';
import Eye from '../../icons/Eye';
interface ButtonProps {
  children: React.ReactNode;
  className?: string;
  type?: 'button' | 'link';
  href?: string;
  onClick?: () => void;
}
const Button: FC<ButtonProps> = ({
  children,
  className,
  onClick,
  type = 'button',
  href,
}: ButtonProps) => {
  if (type === 'link' && href) {
    return (
      <a href={href} className={cn(s.button, className)} onClick={onClick}>
        <span className={s.icon}>
          <Eye />
        </span>
        {children}
      </a>
    );
  } else if (type === 'button') {
    return (
      <button className={cn(className, s.button)} onClick={onClick}>
        <span className={s.icon}>
          <Eye />
        </span>
        {children}
      </button>
    );
  } else {
    return null;
  }
};
export default Button;
