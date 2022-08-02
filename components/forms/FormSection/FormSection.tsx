import s from './FormSection.module.css';
interface FormSectionProps {
  number: number;
  title: string;
  description?: string;
}
const FormSection = ({ number, title, description }: FormSectionProps) => {
  return (
    <div className={s.page}>
      <div>Section {number} of 5</div>
      <h3>{title}</h3>
      <p>{description}</p>
      <button>Prev</button>
      <button>Next</button>
    </div>
  );
};
export default FormSection;
