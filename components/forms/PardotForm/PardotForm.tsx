import { useEmailModal } from '../../../framework/context/emailModal/indext';
import Button from '../../ui/Button';
import s from './PardotForm.module.css';

const PardotForm = () => {
  const { dispatch: isOpenModalDispatch } = useEmailModal();

  return (
    <div className={s.wrap}>
      <iframe
        className={s.iframe}
        src="https://info.goempyrean.com/l/71942/2022-08-17/bl4m9v"
        frameBorder="0"
        allowTransparency={true}
        width={'100%'}
        height={'100%'}
      />
      <Button
        type="button"
        className={s.button}
        onClick={async (e) => {
          e.preventDefault();
          await new Promise((resolve) =>
            setTimeout(() => {
              isOpenModalDispatch({ type: 'TOGGLE_MODAL' });
              resolve(true);
            }, 0)
          );
          await new Promise(async (resolve) => {
            setTimeout(() => {
              window.print();
              resolve(true);
            }, 0);
          });
        }}
      >
        Save Report
      </Button>
    </div>
  );
};

export default PardotForm;
