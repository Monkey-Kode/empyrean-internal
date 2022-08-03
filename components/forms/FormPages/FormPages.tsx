import FormIntro from '../FormIntro';
import data from '../../../data';
import Section from '../Section/Section';
import { useSectionIndex } from '../../../framework/context/section';
// import s from './FormPages.module.css';
const FormPages = () => {
  const { state } = useSectionIndex();
  const content = data.data.forms.find((form) => form.slug === 'assessment');
  const sections = content?.sections;

  if (state.index > 0) {
    return sections && sections?.length > 0 ? (
      <Section
        index={state.index - 1}
        length={sections?.length}
        title={sections[state.index - 1].title}
        description={sections[state.index - 1].description}
        questions={sections[state.index - 1].questions}
      />
    ) : null;
  }

  return <FormIntro />;
};
export default FormPages;
