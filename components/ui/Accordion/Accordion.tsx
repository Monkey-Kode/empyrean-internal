import data from '../../../data';
import alphabet from '../../../lib/alphabet';
import AccordionItem from '../AccordionItem';
import s from './Accordion.module.css';
const Accordion = () => {
  const content = data.data.forms.find(
    (form) => form.slug === 'assessment'
  )?.sections;

  return (
    <div className={s.root}>
      {content?.map((section, index) =>
        section.questions && section.questions.length > 0 ? (
          <AccordionItem
            key={index}
            title={`${alphabet[index]}. ${section.title}`}
            isOpen={section.isOpen}
          >
            <div
              dangerouslySetInnerHTML={{
                __html: section.results[0].content,
              }}
            />
          </AccordionItem>
        ) : null
      )}
    </div>
  );
};
export default Accordion;
