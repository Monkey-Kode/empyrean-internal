import { useFormState } from '../../../framework/context/form';
import { useQuestionIndex } from '../../../framework/context/question';
import { useSectionIndex } from '../../../framework/context/section';
import getFormValueFromSection from '../../../framework/state/gerFromValueFromSection';
import getSectionState from '../../../framework/state/getSectionState';
import Navigation from '../Navigation';
import { Question } from '../Questions/Questions';
import s from './Question.module.css';
import cn from 'classnames';
export interface QuestionInterface {
  text: string;
  name: string;
  low: string;
  high: string;
}
export interface ResultInterface {
  name: string;
  content: string;
}
const Question = ({
  question,
  index,
}: {
  question: Question;
  index: number;
}) => {
  const { state: sectionIndexState } = useSectionIndex();
  const { state: questionIndexState } = useQuestionIndex();
  const { state: formState, dispatch: formDispatch } = useFormState();
  const value = getFormValueFromSection({
    sectionState: getSectionState({ formState, sectionIndexState }),
    sectionIndexState,
    field: question,
  });
  console.log('question: sectionIndexState.index', sectionIndexState.index);
  console.log('question: questionIndexState.index', questionIndexState.index);
  return (
    <div className={s.root}>
      <div className={s.content}>
        <h3 className={s.h3}>Question {index + 1}</h3>
        <p className={s.question}>{question.text}?</p>
      </div>
      <div className={s.inputWrapper}>
        <div className={s.inputContent}>
          <ul className={s.datalist}>
            <li value="1">1</li>
            <li value="2">2</li>
            <li value="3">3</li>
            <li value="3">4</li>
            <li value="5">5</li>
          </ul>
          <input
            data-section={sectionIndexState.index}
            data-question={index}
            className={s.input}
            name={question.name}
            type="range"
            min="1"
            max="5"
            value={value}
            onChange={(e) => {
              formDispatch({
                type: 'UPDATE_FIELD',
                payload: {
                  name: question.name,
                  value: e.target.value,
                  section: Number(sectionIndexState.index),
                },
              });
            }}
          />
          <small className={s.small}>
            <span className={s.smallUppercase}>
              Drag the dial to best match your answer
            </span>{' '}
            - from 1 to 5
          </small>
          <div className={s.labels}>
            <span
              className={cn(s.label, {
                [s.labelShort]: question.low.length < 20,
                [s.labelLong]: question.low.length >= 20,
              })}
            >
              {question.low}
              {/* {question.low.length} */}
            </span>
            <span className={cn(s.label, s.labelLong)}>
              {question.high}
              {/* {question.high.length} */}
            </span>
          </div>
        </div>
      </div>
      <Navigation />
    </div>
  );
};
export default Question;
