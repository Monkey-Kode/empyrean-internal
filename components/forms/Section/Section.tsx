import { useQuestionIndex } from '../../../framework/context/question';
import { useSectionIndex } from '../../../framework/context/section';
import Navigation from '../Navigation';
import s from './Section.module.css';
import data from '../../../data';
import Question from '../Question';

interface SectionProps {
  length: number;
  title: string;
  description: string | undefined;
}
const Section = ({ length, title, description }: SectionProps) => {
  const content = data.data.forms.find(
    (form: any) => form.slug === 'assessment'
  );
  const { state: sectionIndexState } = useSectionIndex();
  const { state: questionIndexState } = useQuestionIndex();

  const questions = content?.sections?.[sectionIndexState.index].questions;

  const question = questions?.[questionIndexState.index];

  if (questionIndexState.index === -1) {
    return (
      <div className={s.root}>
        <div className={s.wrap}>
          <div className={s.content}>
            <h3 className={s.preTitle}>
              Section {sectionIndexState.index + 1} of {length}
            </h3>
            <h2 className={s.title}>{title}</h2>
            <p className={s.p}>{description}</p>
          </div>
        </div>
        <div className={s.navigationWrap}>
          <Navigation />
        </div>
      </div>
    );
  } else {
    return question ? (
      <div className={s.questions}>
        <Question
          key={question.name}
          question={question}
          index={questionIndexState.index}
        />
      </div>
    ) : null;
  }
};

export default Section;
