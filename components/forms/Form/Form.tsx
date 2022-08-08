import s from './Form.module.css';
import FormPages from '../FormPages';
import { useFormState } from '../../../framework/context/form';
import { useEffect } from 'react';
import { useTitle } from '../../../framework/context/title';
import { useSectionIndex } from '../../../framework/context/section';
import getAllFieldResponses from '../../../framework/state/getAllFieldResponses';
import encode from '../../../framework/mail/encode';

const Form = () => {
  const { state: formState } = useFormState();
  const { dispatch: titleDispatch } = useTitle();
  const { dispatch: sectionIndexDispatch } = useSectionIndex();

  useEffect(() => {
    titleDispatch({ type: 'SET_TITLE', payload: 'Participate' });
  }, [titleDispatch]);

  return (
    <form
      //@ts-ignore
      className={s.root}
      onSubmit={async (e) => {
        e.preventDefault();
        try {
          const fieldResponses = getAllFieldResponses(formState);

          console.log('fieldResponses', { ...fieldResponses });
          const body = encode({
            ['form-name']: 'survey',
            ...fieldResponses,
          });

          console.log('body', body);

          const response = await fetch('/', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/x-www-form-urlencoded',
            },
            body,
          });

          // titleDispatch({ type: 'SET_TITLE', payload: 'Calculating Results' });
          // // send to netlify
          // sectionIndexDispatch({ type: 'set', payload: -2 });
        } catch (error) {
          console.error('error', error);
        }
      }}
    >
      <FormPages />
    </form>
  );
};
export default Form;
