import s from './FormTitleArea.module.css';
import cn from 'classnames';
import { useQuestionIndex } from '../../../framework/context/question';
import { useSectionIndex } from '../../../framework/context/section';
import data from '../../../data';
import { useTitle } from '../../../framework/context/title';

const FormTitleArea = () => {
  const { state: sectionIndexState } = useSectionIndex();
  const { state: questionIndexState } = useQuestionIndex();
  const { state: pageTitle } = useTitle();
  const content = data.data.forms.find(
    (form: any) => form.slug === 'assessment'
  );
  const sections = content?.sections;
  const sectionTitle =
    questionIndexState.index > -1 && sections?.[sectionIndexState.index]?.title;
  useQuestionIndex();
  return pageTitle.text !== '' ? (
    <div className={s.root}>
      <div className={cn('wrap', s.content)}>
        {questionIndexState.index === -1 && sectionIndexState.index === -1 ? (
          <h1 className={s.heading}>{pageTitle.text}</h1>
        ) : sectionIndexState.index >= 0 && questionIndexState.index !== -1 ? (
          <h1 className={s.heading}>
            Section {sectionIndexState.index + 1} of {sections.length}
          </h1>
        ) : null}
        {sectionTitle && <h2 className={s.sectionTitle}>{sectionTitle}</h2>}
      </div>
    </div>
  ) : null;
};
export default FormTitleArea;
