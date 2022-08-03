import s from './Section.module.css';
interface SectionProps {
  index: number;
  length: number;
  title: string;
  description: string | undefined;
  questions: {
    text: string;
    name: string;
    low: string;
    high: string;
  }[];
}
const Section = ({
  index,
  length,
  title,
  description,
  questions,
}: SectionProps) => (
  <div className={s.root}>
    <div className={s.content}>
      <h3 className={s.preTitle}>
        Section {index + 1} of {length}
      </h3>
      <h2 className={s.title}>{title}</h2>
      <p className={s.p}>{description}</p>
    </div>
  </div>
);

export default Section;
