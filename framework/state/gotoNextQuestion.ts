import { QuestionDispatch, QuestionState } from '../context/question';
import { SectionDispatch, SectionState } from '../context/section';

const gotoNextQuestion = (
  questions: any,
  questionIndexState: QuestionState,
  questionIndexDispatch: QuestionDispatch,
  sectionIndexState: SectionState,
  sectionIndexDispatch: SectionDispatch,
  sections: any
) => {
  const sectionIndex = sectionIndexState.index;
  const questionIndex = questionIndexState.index;
  //  in form intro
  if (sectionIndex === 0 && questionIndex === -1) {
    sectionIndexDispatch({ type: 'set', payload: 0 });
    questionIndexDispatch({ type: 'set', payload: 0 });
  }
  // in section intro
  else if (sectionIndex >= 0 && questionIndex === -1) {
    questionIndexDispatch({ type: 'set', payload: 0 });
  }
  // in question
  else if (questionIndex > -1 && questionIndex < questions.length - 1) {
    questionIndexDispatch({ type: 'next', payload: 1 });
  }
  // in last question of section
  else if (sectionIndex >= 0 && questionIndex === questions.length - 1) {
    sectionIndexDispatch({ type: 'next', payload: 1 });
    questionIndexDispatch({ type: 'set', payload: -1 });
  }
};

export default gotoNextQuestion;
