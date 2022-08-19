import s from './Form.module.css';
import FormPages from '../FormPages';
import { useFormState } from '../../../framework/context/form';
import { useEffect, useState } from 'react';
import { useTitle } from '../../../framework/context/title';
import { useSectionIndex } from '../../../framework/context/section';
import encode from '../../../framework/mail/encode';
import normalizeData from '../../../framework/state/normalizeData';
import getScores from '../../../framework/score/getScores';
import normalizeScores from '../../../framework/score/normalizeScores';
import getTotalScore from '../../../framework/score/getTotalScore';
import ErrorMessage from '../../ui/ErrorMessage';
import ResultsLoader from '../ResultsLoader';
import Report from '../Report';

const Form = () => {
  useSectionIndex();
  const { state: formState } = useFormState();
  const { dispatch: titleDispatch } = useTitle();
  const { state: sectionIndexState, dispatch: sectionIndexDispatch } =
    useSectionIndex();
  const [errorMessage, setErrorMessage] = useState('');
  const scores = getScores({
    formState,
  });
  const totalScore = getTotalScore(scores);
  const normalizeScoresData = normalizeScores(scores);
  useEffect(() => {
    titleDispatch({ type: 'SET_TITLE', payload: 'BEGIN ASSESSMENT' });
  }, [titleDispatch]);

  console.log('normalize Scores', normalizeScoresData);
  const showReport = sectionIndexState.index === -3;
  const showloader = sectionIndexState.index === -2;
  return (
    <>
      <form
        name="survey"
        data-netlify="true"
        // data-netlify-recaptcha="true"
        netlify-honeypot="bot-field"
        className={s.root}
        onSubmit={async (e) => {
          const form = e.target as HTMLFormElement;
          e.preventDefault();
          try {
            const fieldResponses = normalizeData(formState);
            const body = encode({
              ['form-name']: form.getAttribute('name') || 'survey',
              ['total-score']: totalScore,
              ...normalizeScoresData,
              ...fieldResponses,
            });
            console.log('scores', scores);
            console.log('body', body);
            const response = await fetch('/', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
              },
              body,
            });
            setErrorMessage('');
            titleDispatch({
              type: 'SET_TITLE',
              payload: 'Calculating Results',
            });
            // send to netlify
            sectionIndexDispatch({ type: 'set', payload: -2 });
          } catch (error) {
            setErrorMessage('Sorry, there was an error submitting the form');
            console.error('error', error);
          }
        }}
      >
        {errorMessage && <ErrorMessage message={errorMessage} />}

        <FormPages />
      </form>
      {showloader && <ResultsLoader />}
      {showReport && <Report />}
    </>
  );
};
export default Form;
