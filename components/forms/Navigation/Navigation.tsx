import data from '../../../data';
import { useQuestionIndex } from '../../../framework/context/question';

import { useSectionIndex } from '../../../framework/context/section';
import s from './Navigation.module.css';
const Navigation = () => {
  const { state: sectionIndexState, dispatch: sectionIndexDispatch } =
    useSectionIndex();
  const { state: questionIndexState, dispatch: questionIndexDispatch } =
    useQuestionIndex();


  const assessmentPage = data.data.forms.find(
    (form) => form.slug === 'assessment'
  );
  const sections = assessmentPage?.sections;
  const currentSection = sections?.[sectionIndexState.index];
  const questions = sections?.[sectionIndexState.index].questions;

  return (
    <div className={s.root}>
      <button
        className={s.label}
        onClick={(e) => {
          e.preventDefault();
          if (questionIndexState.index > 0) {
            questionIndexDispatch({ type: 'previous', payload: 1 });
          }
        }}
      >
        {`<<`} PREV
      </button>
      {sections &&
      questions &&
      sectionIndexState.index === sections?.length - 1 &&
      questionIndexState.index === questions?.length - 1 ? (
        <input type="submit" className={s.label} value={`SUBMIT >>`} />
      ) : (
        <button
          className={s.label}
          onClick={(e) => {
            e.preventDefault();
            if (questions) {
              if (questionIndexState.index < questions?.length - 1) {
                questionIndexDispatch({
                  type: 'next',
                  payload: 1,
                });

              } else if (
                questionIndexState.index === questions?.length - 1 &&
                sectionIndexState.index < sections?.length - 1
              ) {
                questionIndexDispatch({
                  type: 'set',
                  payload: -1,
                });
                sectionIndexDispatch({
                  type: 'next',
                  payload: 1,
                });
              }
            }
          }}
        >
          NEXT {`>>`}
        </button>
      )}
    </div>
  );
};
export default Navigation;
