import { FormEvent, SyntheticEvent, useState } from 'react';
import data from '../../../data';
import { useEmailModal } from '../../../framework/context/emailModal/indext';
import Button from '../../ui/Button';
import ErrorMessage from '../../ui/ErrorMessage';
import Input from '../../ui/Input';
import SuccessMessage from '../../ui/SuccessMessage';
import s from './PardotForm.module.css';
interface FormFields {
  [key: string]: {
    value: string;
  };
}
interface FormValues {
  [key: string]: string;
}
const PardotForm = () => {
  const { dispatch: isOpenModalDispatch } = useEmailModal();
  const [errorMessage, setErrorMessage] = useState('');
  const [success, setSuccess] = useState(false);
  const content = data.data.pages.find(
    (page: any) => page.slug === 'download-personal-report'
  )?.content;
  const description = content?.find(
    (content: any) => content.type === 'text'
  )?.content;

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement & FormFields;

    const formData = new FormData(form);
    const formDataJson: FormValues = {
      first_name: '',
      last_name: '',
      email: '',
      company: '',
      maturity_assessment_score: '',
    };
    formData.forEach((value, key) => {
      if (typeof value === 'string') {
        formDataJson[key] = value;
      }
    });
    console.log('formDataJson', formDataJson);
    const formBody = Object.keys(formDataJson)
      .map(
        (key) =>
          encodeURIComponent(key) + '=' + encodeURIComponent(formDataJson[key])
      )
      .join('&');

    console.log('formBody', formBody);
    console.log('form.action', form.action);
    const response = await fetch(form.action, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
        'Access-Control-Allow-Origin': '*',
      },
      body: formBody,
    });
    const data = await response.json();
    if (data.success) {
      setSuccess(true);
      await new Promise((resolve) =>
        setTimeout(() => {
          isOpenModalDispatch({ type: 'TOGGLE_MODAL' });
          resolve(true);
        }, 0)
      );
      await new Promise(async (resolve) => {
        // const html2pdf = (await import('html2pdf.js')).default;
        setTimeout(() => {
          // const element = document.getElementById('__next');
          // const opt = {
          //   filename: 'report.pdf',
          //   pagebreak: {
          //     mode: ['avoid-all', 'css', 'legacy'],
          //   },
          //   jsPDF: {
          //     orientation: 'portrait',
          //   },
          // };
          // html2pdf().set(opt).from(element).save();
          // resolve(true);
          window.print();
        }, 0);
      });
    } else {
      setErrorMessage(data.message);
    }
  };
  return success ? (
    <>
      <SuccessMessage message="Thank you for submitting your information. Download your report by clicking on the button below." />
    </>
  ) : (
    <div className={s.wrap}>
      <p className={s.p}>{description}</p>
      {errorMessage && <ErrorMessage message={errorMessage} />}
      <form
        action="http://info.goempyrean.com/l/71942/2022-03-04/b54xmp"
        method="post"
        id="pardot-form"
        className={s.form}
        onSubmit={handleSubmit}
      >
        <div>
          <Input
            label="First Name"
            type="text"
            name="first_name"
            required={true}
          />
        </div>
        <div>
          <Input
            label="Last Name"
            type="text"
            name="last_name"
            required={true}
          />
        </div>

        <div>
          <Input
            label="Businenss Email"
            type="email"
            name="email"
            required={true}
          />{' '}
        </div>
        <div>
          <Input label="Company" type="text" name="company" required={true} />
        </div>
        <div className="form-field job-title required">
          <Input
            label="Job Title"
            type="text"
            name="job_title"
            required={true}
          />
        </div>
        <input type="hidden" name="maturity_assessment_score" />
        <div className={s.buttonWrap}>
          <Button className={s.button} type="submit" value={'Submit'} />
        </div>
      </form>
    </div>
  );
};

export default PardotForm;
