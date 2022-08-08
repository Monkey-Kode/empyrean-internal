import { useState } from 'react';
import encode from '../../../framework/mail/encode';
import Button from '../../ui/Button';
import Input from '../../ui/Input';
import SuccessMessage from '../../ui/SuccessMessage';
import s from './ContactForm.module.css';
const ContactForm = () => {
  const [errorMessage, setErrorMessage] = useState('');
  const [success, setSuccess] = useState(false);

  return success ? (
    <SuccessMessage message="Thank you for your message. We will be in touch soon." />
  ) : (
    <form
      className={s.root}
      onSubmit={async (e) => {
        e.preventDefault();
        const fd = new FormData(e.target as HTMLFormElement);
        const entries = [...(fd.entries() as any)];
        const body = encode({
          ['form-name']: 'contact',
          ...Object.fromEntries(entries),
        });
        console.log('send contact to netlify', body);
        // send to netlify
        try {
          const response = await fetch('/', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/x-www-form-urlencoded',
            },
            body,
          });
          setSuccess(true);
          setErrorMessage('');
        } catch (error) {
          console.error('error', error);
          setErrorMessage('Sorry, there was an error submitting the form');
        }
      }}
    >
      <div className={s.row}>
        <div className={s.col}>
          <Input
            label="First Name"
            type="text"
            name="firstname"
            id="firstname"
            placeholder="First Name"
          />
        </div>
        <div className={s.col}>
          <Input
            label="Last Name"
            type="text"
            name="lastname"
            id="lastname"
            placeholder="Last Name"
          />
        </div>
      </div>

      <div className={s.fullCol}>
        <Input
          label="Email"
          type="email"
          name="email"
          id="email"
          placeholder="Email"
        />
      </div>
      <div className={s.fullCol}>
        <label className={s.label} htmlFor="message">
          Message
        </label>
        <textarea
          className={s.textarea}
          name="message"
          id="message"
          placeholder="Message"
          rows={5}
        />
      </div>
      <Button className={s.button} type="submit" value={'Send'} />
    </form>
  );
};

export default ContactForm;
