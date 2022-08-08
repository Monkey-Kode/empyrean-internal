import s from './ErrorMessage.module.css';
const ErrorMessage = ({ message }: { message: string }) => {
  return <small className={s.error}>{message}</small>;
};
export default ErrorMessage;
