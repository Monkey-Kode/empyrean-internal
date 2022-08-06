import s from './Contact.module.css';
import cn from 'classnames';
import data from '../../../data';
import ContactForm from '../ContactForm';
const Contact = () => {
  const content = data.data.pages.find((page: any) => page.slug === 'contact');
  return (
    <>
      <div className={s.topArea}>
        <div className={s.topAreaContent}>
          <h1 className={s.h1}>{content?.title}</h1>
        </div>
      </div>
      <main className={cn(s.root, 'wrap')}>
        <div className={s.content}>
            {
              content?.content?.find((content: any) => content.type === 'text')
                ?.content
            }
            <ContactForm />
        </div>
      </main>
    </>
  );
};
export default Contact;
