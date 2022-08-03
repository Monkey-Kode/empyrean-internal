import { useState } from 'react';
import s from './Form.module.css';
import FormIntro from '../FormIntro';
import Sections from '../Sections';
import FormPages from '../FormPages';

const Form = () => {
  return (
    <form
      className={s.root}
      onSubmit={(e) => {
        console.log('send to netlify');
      }}
    >
      <FormPages />
    </form>
  );
};
export default Form;
