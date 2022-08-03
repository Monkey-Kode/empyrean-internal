import data from '../../../data';
import { useSectionIndex } from '../../../framework/context/section';
import s from './Navigation.module.css';
const Navigation = () => {
  const { state, dispatch: sectionDispatch } = useSectionIndex();

  const assessmentPage = data.data.forms.find(
    (form) => form.slug === 'assessment'
  );
  const sectionsLength = assessmentPage?.sections?.length;

  return (
    <div className={s.root}>
      <button
        className={s.label}
        onClick={(e) => {
          e.preventDefault();
          if (state.index >= 0) {
            sectionDispatch({ type: 'previous', payload: 1 });
          }
        }}
      >
        {`<<`} PREV
      </button>
      <button
        className={s.label}
        onClick={(e) => {
          e.preventDefault();
          if (state.index < Number(sectionsLength)) {
            sectionDispatch({ type: 'next', payload: 1 });
          }
        }}
      >
        NEXT {`>>`}
      </button>
    </div>
  );
};
export default Navigation;
