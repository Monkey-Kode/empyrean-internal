import s from './Form.module.css';
import FormPages from '../FormPages';
import { useFormState } from '../../../framework/context/form';
import { useEffect } from 'react';
import { useTitle } from '../../../framework/context/title';
import { useSectionIndex } from '../../../framework/context/section';

const Form = () => {
  const { state: formState } = useFormState();
  const { dispatch: titleDispatch } = useTitle();
  const { dispatch: sectionIndexDispatch } = useSectionIndex();


  useEffect(() => {
    titleDispatch({ type: 'SET_TITLE', payload: 'Participate' });
  }, [titleDispatch]);

  return (
    <form
      className={s.root}
      onSubmit={(e) => {
        e.preventDefault();
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
