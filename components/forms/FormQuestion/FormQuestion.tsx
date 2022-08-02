import s from './FormQuestion.module.css';
const FormQuestion = () => {
  return (
    <div className={s.page}>
      Question 1 To what extent are you as benefits leader currently involved in
      delivering upon strategic initiatives?
      <input type="range" min="1" max="5" />
    </div>
  );
};
export default FormQuestion;
