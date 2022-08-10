import { useState } from 'react';
import data from '../../../data';
import encode from '../../../framework/mail/encode';
import Button from '../../ui/Button';
import Input from '../../ui/Input';
import SuccessMessage from '../../ui/SuccessMessage';
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
  const privacy = content?.find(
    (content: any) => content.type === 'privacy'
  )?.content;
  return success ? (
    <SuccessMessage message="Thank you for submitting your information. You should recieve your assessment via email." />
  ) : (
    <div className={s.root}>
      <p className={s.p}>{description}</p>
      <form
        name="email-report-form"
        data-netlify="true"
        data-netlify-recaptcha="true"
        className={s.form}
        onSubmit={async (e) => {
          const form = e.target as HTMLFormElement;
          e.preventDefault();
          const fd = new FormData(form as HTMLFormElement);
          const entries = [...(fd.entries() as any)];
          const body = encode({
            ['form-name']: form.getAttribute('name') || 'email-report-form',
            ...Object.fromEntries(entries),
          });
          try {
            const response = await fetch('/', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
              },
              body,
            });
            console.log('response', response);
            setSuccess(true);
            setErrorMessage('');
          } catch (error) {
            console.error('error', error);
            setErrorMessage('Sorry, there was an error submitting the form');
          }
        }}
      >
        <div>
          <Input
            label="First Name"
            type="text"
            name="firstName"
            id="firstName"
            placeholder="First Name"
          />
        </div>
        <div>
          <Input
            label="Last Name"
            type="text"
            name="lastName"
            id="lastName"
            placeholder="Last Name"
          />
        </div>
        <div>
          <Input
            label="Email"
            type="email"
            name="email"
            id="email"
            placeholder="Email"
          />
        </div>
        <div>
          <Input
            label="Company"
            type="text"
            name="company"
            id="company"
            placeholder="Company"
          />
        </div>
        <div>
          <Button className={s.button} type="submit" value={'Send'} />
          <small className={s.small}>{privacy}</small>
        </div>
      </form>
    </div>
  );
};
export default EmailReportForm;
