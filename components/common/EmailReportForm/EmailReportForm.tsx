import { useState } from 'react';
import data from '../../../data';
import ErrorMessage from '../../ui/ErrorMessage';
import SuccessMessage from '../../ui/SuccessMessage';
import EmailReportFormFields from '../EmailReportFormFields';
import s from './EmailReportForm.module.css';
const EmailReportForm = () => {
  const [errorMessage, setErrorMessage] = useState('');
  const [success, setSuccess] = useState(false);
  const content = data.data.pages.find(
    (page: any) => page.slug === 'download-personal-report'
  )?.content;
  const description = content?.find(
    (content: any) => content.type === 'text'
  )?.content;
  return success ? (
    <SuccessMessage message="Thank you for submitting your information. You should recieve your assessment via email." />
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
