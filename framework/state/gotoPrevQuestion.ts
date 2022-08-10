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
  console.log('lastPrevQuestionIndex', lastPrevQuestionIndex);

  if (questions) {
    if (questionIndexState.index > 0) {
      questionIndexDispatch({ type: 'previous', payload: 1 });
    } else if (sectionIndexState.index > 0 && questionIndexState.index === -1) {
      questionIndexDispatch({ type: 'set', payload: lastPrevQuestionIndex });
      sectionIndexDispatch({ type: 'previous', payload: 1 });
    } else if (sectionIndexState.index > 0 && questionIndexState.index === 0) {
      questionIndexDispatch({ type: 'set', payload: -1 });
      sectionIndexDispatch({ type: 'previous', payload: 1 });
    } else if (lastPrevQuestionIndex === 0) {
      sectionIndexDispatch({
        type: 'set',
        payload: -1,
      });
    }
  }
};

export default gotoPrevQuestion;
