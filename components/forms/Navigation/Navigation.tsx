import s from './Navigation.module.css';
const Navigation = () => {
  return (
    <div className={s.root}>
      <button className={s.label}>{`<<`} PREV</button>
      <button className={s.label}>NEXT {`>>`}</button>
    </div>
  );
};
export default Navigation;
