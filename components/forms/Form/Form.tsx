import { useState } from 'react';
import s from './Form.module.css';
import FormIntro from '../FormIntro';
import FormSection from '../FormSection';
import FormQuestion from '../FormQuestion';
import Sections from '../Sections';

const Form = () => {
  return (
    <form
      className={s.root}
      onSubmit={(e) => {
        console.log('send to netlify');
      }}
    >
      <FormIntro />
      <Sections />
    </form>
  );
};
export default Form;
