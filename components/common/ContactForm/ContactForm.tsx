import Button from '../../ui/Button';
import s from './ContactForm.module.css';
const ContactForm = () => {
  return (
    <form
      className={s.root}
      onSubmit={(e) => {
        e.preventDefault();
        console.log('send contact to netlify');
        // send to netlify
      }}
    >
      <div className={s.row}>
        <div className={s.col}>
          <label className={s.label} htmlFor="firstname">
            First Name
          </label>
          <input
            className={s.input}
            type="text"
            name="firstname"
            id="firstname"
            placeholder="First Name"
          />
        </div>
        <div className={s.col}>
          <label className={s.label} htmlFor="lastname">
            Last Name
          </label>
          <input
            className={s.input}
            type="text"
            name="lastname"
            id="lastname"
            placeholder="Last Name"
          />
        </div>
      </div>
      <div className={s.fullCol}>
        <label className={s.label} htmlFor="email">
          Email
        </label>
        <input
          className={s.input}
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