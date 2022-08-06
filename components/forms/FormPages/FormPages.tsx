import FormIntro from '../FormIntro';
import data from '../../../data';
import Section from '../Section/Section';
import { useSectionIndex } from '../../../framework/context/section';
import ResultsLoader from '../ResultsLoader';
import Report from '../Report';
// import s from './FormPages.module.css';
const FormPages = () => {
  const { state: sectionIndexState, dispatch: sectionIndexDispatch } =
    useSectionIndex();
  const content = data.data.forms.find(
    (form: any) => form.slug === 'assessment'
  );
  const sections = content?.sections;

  if (sectionIndexState.index >= 0) {
    return sections && sections?.length > 0 ? (
      <Section
        length={sections?.length}
        title={sections[sectionIndexState.index].title}
        description={sections[sectionIndexState.index].description}
      />
    ) : null;
  }

  if (sectionIndexState.index === -2) {
    return <ResultsLoader />;
  }
  if (sectionIndexState.index === -3) {
    return <Report />;
  }

  return <FormIntro />;
};
export default FormPages;
