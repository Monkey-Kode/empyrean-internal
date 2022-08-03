import data from '../../../data';
import s from './Sections.module.css';
import { useQuestionPage } from '../../../framework/context/questions';
import Section from '../Section/Section';
const Sections = () => {
  const context = useQuestionPage();
  const content = data.data.forms.find((form) => form.slug === 'assessment');
  return (
    <div className={s.root}>
      {content?.sections?.map((section, index) => (
        <Section
          key={section.title}
          index={index}
          length={content?.sections?.length}
          title={section.title}
          description={section.description}
          questions={section.questions}
        />
      ))}
    </div>
  );
};
export default Sections;
