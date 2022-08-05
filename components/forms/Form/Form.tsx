import s from './Form.module.css';
import FormPages from '../FormPages';
import { useFormState } from '../../../framework/context/form';
import { useEffect } from 'react';
import { useTitle } from '../../../framework/context/title';
import { useSectionIndex } from '../../../framework/context/section';
import { useScoreState } from '../../../framework/context/score';

const Form = () => {
  const { state: formState } = useFormState();
  const { dispatch: titleDispatch } = useTitle();
  const { dispatch: sectionIndexDispatch } = useSectionIndex();
  const { state: scoreState } = useScoreState();

  useEffect(() => {
    titleDispatch({ type: 'SET_TITLE', payload: 'Participate' });
  }, [titleDispatch]);

  return (
    <form
      className={s.root}
      onSubmit={(e) => {
        e.preventDefault();
        // console.log('send to netlify', formState);
        // console.log('score state', scoreState);
        titleDispatch({ type: 'SET_TITLE', payload: 'Calculating Results' });
        // send to netlify
        sectionIndexDispatch({ type: 'set', payload: -2 });
      }}
    >
      <FormPages />
    </form>
  );
};
export default Form;
