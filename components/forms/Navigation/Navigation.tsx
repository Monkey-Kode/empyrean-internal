import {
  MouseEvent,
  MouseEventHandler,
  RefObject,
  useCallback,
  useEffect,
} from 'react';
import data from '../../../data';
import { useQuestionIndex } from '../../../framework/context/question';

import { useSectionIndex } from '../../../framework/context/section';
import gotoNextQuestion from '../../../framework/state/gotoNextQuestion';
import gotoPrevQuestion from '../../../framework/state/gotoPrevQuestion';
import s from './Navigation.module.css';

const Navigation = () => {
  const { state: sectionIndexState, dispatch: sectionIndexDispatch } =
    useSectionIndex();
  const { state: questionIndexState, dispatch: questionIndexDispatch } =
    useQuestionIndex();

  const assessmentPage = data.data.forms.find(
    (form: any) => form.slug === 'assessment'
  );
  const sections = assessmentPage?.sections;
  const questions = sections?.[sectionIndexState.index]?.questions;

  const handleNextClick = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    gotoNextQuestion(
      questions,
      questionIndexState,
      questionIndexDispatch,
      sectionIndexState,
      sectionIndexDispatch,
      sections
    );
  };

  const handlePrevClick = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    gotoPrevQuestion(
      questions,
      questionIndexState,
      questionIndexDispatch,
      sectionIndexState,
      sectionIndexDispatch,
      sections
    );
  };
  const keyDownHandler = useCallback(
    (e: KeyboardEvent) => {
      console.log('key', e.key);
      if (e.key === 'Enter') {
        gotoNextQuestion(
          questions,
          questionIndexState,
          questionIndexDispatch,
          sectionIndexState,
          sectionIndexDispatch,
          sections
        );
      }
    },
    [
      questions,
      questionIndexState,
      questionIndexDispatch,
      sectionIndexState,
      sectionIndexDispatch,
      sections,
    ]
  );

  useEffect(() => {
    document.addEventListener('keydown', keyDownHandler);
    return () => {
      document.removeEventListener('keydown', keyDownHandler);
    };
  }, [keyDownHandler]);

  return (
    <div className={s.root}>
      <button className={s.label} onClick={handlePrevClick}>
        {`<<`} PREV
      </button>
      {sections &&
      questions &&
      sectionIndexState.index === sections?.length - 1 &&
      questionIndexState.index === questions?.length - 1 ? (
        <input type="submit" className={s.label} value={`SUBMIT >>`} />
      ) : (
        <button className={s.label} onClick={handleNextClick}>
          NEXT {`>>`}
        </button>
      )}
    </div>
  );
};
export default Navigation;
