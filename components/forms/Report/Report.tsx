import data from '../../../data';
import { useFormState } from '../../../framework/context/form';
import Chart from '../../ui/Chart';
import s from './Report.module.css';
const Report = () => {
  const { state: formState } = useFormState();
  const content = data.data.pages.find(
    (page) => page.slug === 'report'
  )?.content;
  const title = content?.find((content) => content.type === 'title')?.content;
  const subText = content?.find(
    (content) => content.type === 'subtext'
  )?.content;
  const subtitle = content?.find(
    (content) => content.type === 'subtitle'
  )?.content;
  const summary = content?.find(
    (content) => content.type === 'summary'
  )?.content;

  console.log('formState', formState);
  return (
    <div className={s.root}>
      <div className={s.topArea}>
        <div>
          <h1 className={s.mainHeading}>{title}</h1>
          <small>{subText}</small>
          <ul className={s.list}>
            <li>{formState['company-size']}</li>
            <li>{formState.role}</li>
            <li>{formState.industry}</li>
          </ul>
          <h2>{subtitle}</h2>

          <div dangerouslySetInnerHTML={{ __html: summary }} />
        </div>
        <div className={s.download}>
          <a href="#">Download PDF</a>
          <Chart />
        </div>
      </div>
    </div>
  );
};

export default Report;
