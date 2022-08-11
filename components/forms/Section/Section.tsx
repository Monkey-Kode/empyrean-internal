import { useQuestionIndex } from '../../../framework/context/question';
import { useSectionIndex } from '../../../framework/context/section';
import Navigation from '../Navigation';
import s from './Section.module.css';
import Question from '../Question';
import cn from 'classnames';
import { QuestionInterface, ResultInterface } from '../Question/Question';
// import { Transition } from '@headlessui/react';

interface Section {
  isOpen: boolean;
  title: string;
  description: string;
  weight: number;
  lowScore: number;
  mediumScore: number;
  highScore: number;
  questions: QuestionInterface[];
  results: ResultInterface[];
}
interface SectionProps {
  length: number;
  section: Section;
  index: number;
}
const Section = ({ length, section, index }: SectionProps) => {
  const { title, description } = section;
  const questions = section.questions;
  const { state: sectionIndexState } = useSectionIndex();
  const { state: questionIndexState } = useQuestionIndex();

  // const questions = content?.sections?.[sectionIndexState.index].questions;
  console.log(
    'section index state',
    sectionIndexState.index,
    index
    // sectionIndexState.index === index
  );
  console.log(
    'question index state',
    questionIndexState.index,
    index
    // questionIndexState.index === index
  );
  const showFullSection = sectionIndexState.index === index;
  const showSection =
    sectionIndexState.index === index && questionIndexState.index === -1;
  return (
    <div
      key={section.title}
      className={cn(s.root, {
        [s.show]: showFullSection,
      })}
    >
      <div
        className={cn(s.root, {
          [s.show]: showSection,
        })}
      >
        <div className={s.wrap}>
          <div className={s.content}>
            <h3 className={s.preTitle}>
              Section {index + 1} of {length}
            </h3>
            <h2 className={s.title}>{title}</h2>
            <p className={s.p}>{description}</p>
          </div>
        </div>
        <div className={s.navigationWrap}>
          <Navigation />
        </div>
      </div>
      {questions.map((question: any, index: number) => {
        const showQuestion =
          questionIndexState.index === index && questionIndexState.index !== -1;
        return (
          <div
            data-section={sectionIndexState.index}
            data-question={index}
            className={cn(s.question, {
              [s.show]: showQuestion,
            })}
            key={question.name}
          >
            <Question key={question.name} question={question} index={index} />
          </div>
        );
      })}
    </div>
  );

  // if (questionIndexState.index === -1) {
  //   return (
  //     <div className={s.root}>
  //       <div className={s.wrap}>
  //         <div className={s.content}>
  //           <h3 className={s.preTitle}>
  //             Section {index + 1} of {length}
  //           </h3>
  //           <h2 className={s.title}>{title}</h2>
  //           <p className={s.p}>{description}</p>
  //         </div>
  //       </div>
  //       <div className={s.navigationWrap}>
  //         <Navigation />
  //       </div>
  //     </div>
  //   );
  // } else {
  //   return question
  //     ? questions.map((question) => {
  //         return (
  //           <div className={s.questions} key={question.name}>
  //             <Question
  //               key={question.name}
  //               question={question}
  //               index={questionIndexState.index}
  //             />
  //           </div>
  //         );
  //       })
  //     : null;
  // }
};

export default Section;
