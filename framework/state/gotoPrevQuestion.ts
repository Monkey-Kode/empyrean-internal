import { QuestionDispatch, QuestionState } from '../context/question';
import { SectionDispatch, SectionState } from '../context/section';

const gotoPrevQuestion = (
  questions: any,
  questionIndexState: QuestionState,
  questionIndexDispatch: QuestionDispatch,
  sectionIndexState: SectionState,
  sectionIndexDispatch: SectionDispatch,
  sections: any
) => {
  const lastPrevQuestionIndex =
    sectionIndexState.index > 0
      ? sections[sectionIndexState.index - 1]?.questions.length - 1
      : 0;
  const sectionIndex = sectionIndexState.index;
  const questionIndex = questionIndexState.index;
  // in form intro
  if (sectionIndex === 0 && questionIndex === -1) {
    sectionIndexDispatch({ type: 'set', payload: -1 });
    questionIndexDispatch({ type: 'set', payload: -1 });
  }
  // in section intro
  else if (sectionIndex >= 0 && questionIndex === -1) {
    sectionIndexDispatch({ type: 'prev', payload: 1 });
    questionIndexDispatch({
      type: 'set',
      payload: lastPrevQuestionIndex,
    });
  }
  // in question
  else if (questionIndex > -1 && questionIndex <= questions.length - 1) {
    questionIndexDispatch({ type: 'prev', payload: 1 });
  }
  // in last question of section
  else if (sectionIndex >= 0 && questionIndex === 0) {
    sectionIndexDispatch({ type: 'prev', payload: 1 });
    questionIndexDispatch({ type: 'set', payload: -1 });
  }

};

export default gotoPrevQuestion;
