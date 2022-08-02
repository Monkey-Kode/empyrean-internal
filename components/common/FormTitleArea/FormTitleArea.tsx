import s from './FormTitleArea.module.css';
import cn from 'classnames';
interface FormTitleAreaProps {
  title: string;
  sectionTitle?: string;
}
const FormTitleArea = ({ title, sectionTitle }: FormTitleAreaProps) => {
  return (
    <div className={s.root}>
      <div className={cn('wrap', s.content)}>
        <h1 className={s.heading}>{title}</h1>
        {sectionTitle && <h2 className={s.sectionTitle}>{sectionTitle}</h2>}
      </div>
    </div>
  );
};
export default FormTitleArea;
