import { useState } from 'react';
import data from '../../../data';
import encode from '../../../framework/mail/encode';
import Button from '../../ui/Button';
import ErrorMessage from '../../ui/ErrorMessage';
import Input from '../../ui/Input';
import SuccessMessage from '../../ui/SuccessMessage';
import s from './ContactForm.module.css';
const ContactForm = () => {
  const [errorMessage, setErrorMessage] = useState('');
  const [success, setSuccess] = useState(false);
  const content = data.data.pages.find((page: any) => page.slug === 'contact');
  return success ? (
    <SuccessMessage message="Thank you for your message. We will be in touch soon." />
  ) : (
    <>
      <p>
        {
          content?.content?.find((content: any) => content.type === 'text')
            ?.content
        }
      </p>
      {errorMessage && <ErrorMessage message={errorMessage} />}
      <form
        name="contact"
        data-netlify="true"
        netlify-honeypot="bot-field"
        className={s.root}
        onSubmit={async (e) => {
          const form = e.target as HTMLFormElement;
          e.preventDefault();
          const fd = new FormData(e.target as HTMLFormElement);
          const entries = [...(fd.entries() as any)];
          const body = encode({
            ['form-name']: form.getAttribute('name') || 'contact',
            ...Object.fromEntries(entries),
          });
          console.log('send contact to netlify', body, location.href);
          // send to netlify
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
        <div className={s.row}>
          <input type="hidden" name="form-name" value="contact" />
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
    </>
  );
};

export default ContactForm;
