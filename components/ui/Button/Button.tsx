import { FC, MouseEventHandler } from 'react';
import s from './Button.module.css';
import cn from 'classnames';
import Eye from '../../icons/Eye';
import Link from 'next/link';
interface ButtonProps {
  children?: React.ReactNode;
  className?: string;
  type?: 'button' | 'link' | 'submit';
  href?: string;
  onClick?: MouseEventHandler<HTMLButtonElement> &
    MouseEventHandler<HTMLAnchorElement> &
    MouseEventHandler<HTMLInputElement>;
  value?: string;
}
const Button: FC<ButtonProps> = ({
  children,
  className,
  onClick,
  type = 'button',
  href,
  value,
}: ButtonProps) => {
  if (type === 'link' && href) {
    return (
      <Link href={href}>
        <a className={cn(s.button, className)} onClick={onClick}>
          <span className={s.icon}>
            <Eye />
          </span>
          {children}
        </a>
      </Link>
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
  } else if (type === 'submit') {
    return (
      <input
        className={cn(className, s.button)}
        type="submit"
        value={value}
        onSubmit={onClick}
      />
    );
  } else {
    return null;
  }
};
export default Button;
