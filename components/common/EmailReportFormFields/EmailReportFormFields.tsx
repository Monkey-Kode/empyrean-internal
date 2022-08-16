import { Dispatch, SetStateAction } from 'react';
import data from '../../../data';
import encode from '../../../framework/mail/encode';
import Button from '../../ui/Button';
import Input from '../../ui/Input';
import s from './EmailReportFormFields.module.css';
import cn from 'classnames';
interface EmailReportFormFieldsProps {
  className?: string;
  setSuccess?: Dispatch<SetStateAction<boolean>>;
  setErrorMessage?: Dispatch<SetStateAction<string>>;
}
const EmailReportFormFields = ({
  className,
  setSuccess = () => {},
  setErrorMessage = () => {},
}: EmailReportFormFieldsProps) => {
  const content = data.data.pages.find(
    (page: any) => page.slug === 'download-personal-report'
  )?.content;
  const privacy = content?.find(
    (content: any) => content.type === 'privacy'
  )?.content;
  return (
    <div className={cn(s.root, className)}>
      <form
        name="email-report-form"
        data-netlify="true"
        // data-netlify-recaptcha="true"
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
          const allEntriesNotEmpty = entries.every((entry) => entry[1]);
          console.log('allEntriesnotempty', entries, allEntriesNotEmpty);
          if (allEntriesNotEmpty) {
            setErrorMessage('');
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
          } else {
            setErrorMessage('Please fill in all fields');
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
        </div>
      </form>
      <small className={s.small}>{privacy}</small>
    </div>
  );
};

export default EmailReportFormFields;
