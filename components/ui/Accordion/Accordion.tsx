import data from '../../../data';

import alphabet from '../../../lib/alphabet';
import AccordionItem from '../AccordionItem';
import s from './Accordion.module.css';
import { useFormState } from '../../../framework/context/form';
import {
  calculateSectionScore,
  isHighScore,
  isLowScore,
  isMediumScore,
} from '../../../framework/score/calculateScores';

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
        const isLow = isLowScore({
          score,
          sectionIndex: index,
        });
        const isMedium = isMediumScore({
          score,
          sectionIndex: index,
        });
        const isHigh = isHighScore({
          score,
          sectionIndex: index,
        });

        const level = isLow ? 'low' : isMedium ? 'medium' : isHigh && 'high';

        const report = section.results.find((result) => result.name === level);

        console.log('score', score);
        return section?.questions ? (
          <AccordionItem
            key={index}
            title={`${alphabet[index]}. ${section.title}`}
            isOpen={section.isOpen}
          >
            <h4 className={s.h4}>
              Your Result: <span className={s.score}>{level}</span>
            </h4>
            <div
              dangerouslySetInnerHTML={{
                __html: String(report?.content),
              }}
            />
          </AccordionItem>
        ) : null;
      })}
    </div>
  );
};
export default Accordion;
