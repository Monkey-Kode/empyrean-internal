import { useState } from 'react';
import data from '../../../data';
import { useEmailModal } from '../../../framework/context/emailModal/indext';
import Button from '../../ui/Button';
import ErrorMessage from '../../ui/ErrorMessage';
import SuccessMessage from '../../ui/SuccessMessage';
import EmailReportFormFields from '../EmailReportFormFields';
import s from './EmailReportForm.module.css';

const EmailReportForm = () => {
  const { dispatch: isOpenModalDispatch } = useEmailModal();
  const [errorMessage, setErrorMessage] = useState('');
  const [success, setSuccess] = useState(false);
  const content = data.data.pages.find(
    (page: any) => page.slug === 'download-personal-report'
  )?.content;
  const description = content?.find(
    (content: any) => content.type === 'text'
  )?.content;
  return success ? (
    <>
      <SuccessMessage message="Thank you for submitting your information. Download your report by clicking on the button below." />
      <Button
        className={s.button}
        type="button"
        onClick={async (e) => {
          e.preventDefault();
          await new Promise((resolve) =>
            setTimeout(() => {
              isOpenModalDispatch({ type: 'TOGGLE_MODAL' });
              resolve(true);
            }, 1000)
          );
          const html2pdf = (await import('html2pdf.js')).default;
          const element = document.getElementById('__next');
          const opt = {
            filename: 'report.pdf',
            pagebreak: {
              mode: ['avoid-all', 'css', 'legacy'],
            },
            jsPDF: {
              orientation: 'landscape',
            },
          };
          html2pdf().set(opt).from(element).save();
        }}
      >
        Download Report
      </Button>
    </>
  ) : (
    <div className={s.root}>
      <p className={s.p}>{description}</p>
      {errorMessage && <ErrorMessage message={errorMessage} />}
      <EmailReportFormFields
        setSuccess={setSuccess}
        setErrorMessage={setErrorMessage}
      />
    </div>
  );
};
export default EmailReportForm;
