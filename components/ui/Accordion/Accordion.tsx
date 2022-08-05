import data from '../../../data';

import alphabet from '../../../lib/alphabet';
import AccordionItem from '../AccordionItem';
import s from './Accordion.module.css';
import { useFormState } from '../../../framework/context/form';
import { calculateSectionScore } from '../../../framework/score/calculateScores';

const Accordion = () => {
  const { state: formState } = useFormState();
  const content = data.data.forms.find(
    (form) => form.slug === 'assessment'
  )?.sections;
  return (
    <div className={s.root}>
      {content?.map((section, index) => {
        const score = calculateSectionScore({
          formState,
          index,
        });
        return section?.questions ? (
          <AccordionItem
            key={index}
            title={`${alphabet[index]}. ${section.title}`}
            isOpen={section.isOpen}
          >
            <h4 className={s.h4}>Your Result: </h4>
            <div
              dangerouslySetInnerHTML={{
                __html: section.results[0].content,
              }}
            />
          </AccordionItem>
        ) : null;
      })}
    </div>
  );
};
export default Accordion;
