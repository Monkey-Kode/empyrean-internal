import s from './Input.module.css';
import cn from 'classnames';
const Input = ({ label, ...props }: { label: string; [key: string]: any }) => {
  return (
    <div className={s.root}>
      <label className={s.label} htmlFor={props.id}>
        {label}
        {props.required && '*'}
      </label>
      <input className={cn(s.input, props.className)} {...props} />
    </div>
  );
};
export default Input;
