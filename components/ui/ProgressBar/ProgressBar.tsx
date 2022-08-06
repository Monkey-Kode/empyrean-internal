import { useEffect, useState } from 'react';
import s from './ProgressBar.module.css';
interface ProgressBarProps {
  width: number;
  percent: number;
}
const ProgressBar = ({ width, percent }: ProgressBarProps) => {
  const [value, setValue] = useState(0);
  useEffect(() => {
    setValue((percent / 100) * width);
  }, [percent, value, width]);

  return (
    <div className={s.root}>
      {' '}
      <div className={s.progressDiv} style={{ width: `${width}%` }}>
        <div style={{ width: `${value}%` }} className={s.progress} />
      </div>
    </div>
  );
};

export default ProgressBar;
