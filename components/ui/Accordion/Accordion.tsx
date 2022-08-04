import data from '../../../data';
import AccordionItem from '../AccordionItem';
import s from './Accordion.module.css';
const Accordion = () => {
  const content = data.data.forms.find(
    (form) => form.slug === 'assessment'
  )?.sections;
  const alpha = Array.from(Array(26)).map((e, i) => i + 65);
  const alphabet = alpha.map((x) => String.fromCharCode(x));
  return (
    <div className={s.root}>
      {content?.map((section, index) =>
        section.questions && section.questions.length > 0 ? (
          <AccordionItem
            key={index}
            title={`${alphabet[index]}. ${section.title}`}
          >
            Results
          </AccordionItem>
        ) : null
      )}
    </div>
  );
};
export default Accordion;
