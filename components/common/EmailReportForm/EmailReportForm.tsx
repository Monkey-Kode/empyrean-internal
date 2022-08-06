import data from '../../../data';
import Button from '../../ui/Button';
import Input from '../../ui/Input';
import s from './EmailReportForm.module.css';
const EmailReportForm = () => {
  const content = data.data.pages.find(
    (page: any) => page.slug === 'download-personal-report'
  )?.content;
  const description = content?.find(
    (content: any) => content.type === 'text'
  )?.content;
  const privacy = content?.find(
    (content: any) => content.type === 'privacy'
  )?.content;
  return (
    <div className={s.root}>
      <p className={s.p}>{description}</p>
      <form
        className={s.form}
        onSubmit={(e) => {
          e.preventDefault();
          console.log('send email to netlify');
          // send to netlify
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
