import { FormEvent, useState } from 'react';
import data from '../../../data';
import { useEmailModal } from '../../../framework/context/emailModal/indext';
import Button from '../../ui/Button';
import ErrorMessage from '../../ui/ErrorMessage';
import Input from '../../ui/Input';
import SuccessMessage from '../../ui/SuccessMessage';
import s from './PardotForm.module.css';
import Image from 'next/image';
export interface FormFields {
  [key: string]: {
    value: string;
  };
}
export interface FormValues {
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

  const handleReport = async () => {
    console.log('handleReport');

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
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement & FormFields;
    const formData = new FormData(form);
    const formDataJson: FormValues = {
      first_name: '',
      last_name: '',
      email: '',
      company: '',
      maturity_assessment_score: '0',
    };
    formData.forEach((value, key) => {
      if (typeof value === 'string') {
        formDataJson[key] = value;
      }
    });
    try {
      const response = await fetch('/api/pardot', {
        method: 'POST',
        body: JSON.stringify(formDataJson),
      });
      const data = await response.json();
      console.log('data', data);

      if (data.success) {
        setSuccess(true);
        // await handleReport();
      }
    } catch (error) {
      console.error('error', error);
    }
  };
  return success ? (
    <div className={s.printPage}>
      <SuccessMessage message="Thanks! Your custom Benefits Maturity Assessment is ready. Click below to print a hard copy, or choose the “Save as PDF” option in your print dialogue window to download a copy." />
      <button
        className={s.button}
        onClick={async (e) => {
          e.preventDefault();
          await handleReport();
        }}
      >
        <Image
          alt="Download Personal Report"
          src="/images/download.jpg"
          loading="eager"
          width={30}
          height={29}
        />
        <div>GET Report</div>
      </button>
    </div>
  ) : (
    <div className={s.wrap}>
      <p className={s.p}>{description}</p>
      {errorMessage && <ErrorMessage message={errorMessage} />}
      <form
        acceptCharset="UTF-8"
        action="https://info.goempyrean.com/l/71942/2022-03-04/b54xmp"
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
            label="Business Email"
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
          <Button type="submit" value={'Submit'} />
        </div>
      </form>
    </div>
  );
};

export default PardotForm;
