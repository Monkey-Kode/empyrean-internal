import s from './Select.module.css';
import cn from 'classnames';
interface SelectProps {
  className?: string;
  label: string;
  options: { value: string; label: string }[];
  value: string | number | undefined;
  name: string;
  onChange?: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  required?: boolean;
}
const Select = ({
  className,
  label,
  options,
  name,
  value,
  onChange,
  required = false,
}: SelectProps) => {
  return (
    <div className={cn(className, s.root)}>
      <div className={s.labelWrapper}>
        <label htmlFor={name} className={s.label}>
          {label}
        </label>
        {required && <span className={s.required}>*</span>}
      </div>
      <div className={s.selectGroup}>
        <select
          name={name}
          id={name}
          className={s.select}
          value={value}
          onChange={onChange}
        >
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};
export default Select;
