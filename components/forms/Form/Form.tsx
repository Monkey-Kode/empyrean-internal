import { useState } from 'react';
import s from './Form.module.css';
import FormIntro from '../FormIntro';
import FormSection from '../FormSection';
import FormQuestion from '../FormQuestion';
import { useQuestionPage } from '../../../framework/context/questions';

const Form = () => {
  return (
    <form
      className={s.root}
      onSubmit={(e) => {
        console.log('send to netlify');
      }}
    >
      <FormIntro />
      <FormSection
        number={1}
        title={`Getting involved in strategy development & decision-making`}
        description={`
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse semper mattis dolor eget tempus. Etiam eu felis at ligula lobortis aliquet ut in sapien. Nulla quis odio magna. Phasellus porta accumsan turpis, ac maximus orci posuere nec. Morbi scelerisque tincidunt arcu, eget laoreet turpis congue in. Donec aliquam, augue in dictum commodo,
        `}
      />
      <FormQuestion />
    </form>
  );
};
export default Form;
