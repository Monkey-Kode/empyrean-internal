import Question from '../Question/Question';
import s from './Questions.module.css';
export interface Question {
  text: string;
  name: string;
  low: string;
  high: string;
}

const Questions = ({ questions }: { questions: Question[] }) => {
  return (
    <div className={s.root}>
      {questions.map((question, index) => (
        <Question key={question.name} question={question} index={index} />
      ))}
    </div>
  );
};
export default Questions;
