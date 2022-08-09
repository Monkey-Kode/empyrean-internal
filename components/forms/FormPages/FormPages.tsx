import FormIntro from '../FormIntro';
import data from '../../../data';
import Section from '../Section/Section';
import { useSectionIndex } from '../../../framework/context/section';
import ResultsLoader from '../ResultsLoader';
import Report from '../Report';
import s from './FormPages.module.css';
import cn from 'classnames';
const FormPages = () => {
  const { state: sectionIndexState, dispatch: sectionIndexDispatch } =
    useSectionIndex();
  const content = data.data.forms.find(
    (form: any) => form.slug === 'assessment'
  );
  const sections = content?.sections;
  const showIntro = sectionIndexState.index === -1;

  return (
    <>
      <FormIntro
        className={cn({
          [s.show]: showIntro,
          [s.hide]: !showIntro,
        })}
      />
      {sections && sections?.length > 0
        ? sections.map((section: any, index: number) => {
            return (
              <Section
                section={section}
                key={section.title}
                length={sections?.length}
                index={index}
              />
            );
          })
        : null}
    </>
  );
};
export default FormPages;
