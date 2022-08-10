import { State } from '../context/form';
import {
  QuestionAction,
  QuestionDispatch,
  QuestionState,
} from '../context/question';
import { SectionDispatch, SectionState } from '../context/section';

const gotoNextQuestion = (
  questions: any,
  questionIndexState: QuestionState,
  questionIndexDispatch: QuestionDispatch,
  sectionIndexState: SectionState,
  sectionIndexDispatch: SectionDispatch,
  sections: any
) => {
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

};

export default gotoNextQuestion;
