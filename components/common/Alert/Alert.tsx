import s from './Alert.module.css';
interface AlertProps {
  color?: string;
  message: string;
}
const Alert = ({ color = 'yellow', message }: AlertProps) => {
  return (
    <div
      className={`${s.root}`}
      style={{
        backgroundColor: color,
      }}
    >
      {message}
    </div>
  );
};

export default Alert;
