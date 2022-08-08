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

const Form = () => {
  const { state: formState } = useFormState();
  const { dispatch: titleDispatch } = useTitle();
  const { dispatch: sectionIndexDispatch } = useSectionIndex();
  const [errorMessage, setErrorMessage] = useState('');
  const scores = getScores({
    formState,
  });
  const totalScore = getTotalScore(scores);
  const normalizeScoresData = normalizeScores(scores);
  useEffect(() => {
    titleDispatch({ type: 'SET_TITLE', payload: 'Participate' });
  }, [titleDispatch]);

  console.log('normalize Scores', normalizeScoresData);

  return (
    <form
      //@ts-ignore
      netlify
      netlify-honeypot="bot-field"
      className={s.root}
      onSubmit={async (e) => {
        e.preventDefault();
        try {
          const fieldResponses = normalizeData(formState);
          const body = encode({
            ['form-name']: 'survey',
            ['total-score']: totalScore,
            ...normalizeScoresData,
            ...fieldResponses,
          });
          console.log('scores', scores);
          console.log('body', body);
          const response = await fetch(location.origin, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/x-www-form-urlencoded',
            },
            body,
          });
          setErrorMessage('');
          titleDispatch({ type: 'SET_TITLE', payload: 'Calculating Results' });
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
  );
};
export default Form;
