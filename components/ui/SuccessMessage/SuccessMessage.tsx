import s from './SuccessMessage.module.css';
interface SuccessMessageProps {
  message: string;
}
const SuccessMessage = ({ message }: SuccessMessageProps) => {
  return (
    <div className={s.success}>
      <p>{message}</p>
    </div>
  );
};
export default SuccessMessage;
