import FormIntro from '../FormIntro';
import data from '../../../data';
import Section from '../Section/Section';
import { useSectionIndex } from '../../../framework/context/section';
import s from './FormPages.module.css';
import cn from 'classnames';
const FormPages = () => {
  const { state: sectionIndexState } = useSectionIndex();
  const content = data.data.forms.find(
    (form: any) => form.slug === 'assessment'
  );
  const sections = content?.sections;
  const showIntro = sectionIndexState.index === -1;

  return (
    <>
      <input type={'hidden'} name={'form-name'} value={'survey'} />
      <input type={'hidden'} name={'total-score'} value={0} />
      {sections.map((section: any, index: number) => (
        <input
          type={'hidden'}
          key={section.title}
          name={`section_${index + 1}`}
          value={0}
        />
      ))}
      <FormIntro
        className={cn({
          [s.show]: showIntro,
          [s.hide]: !showIntro,
        })}
      />
      {sections.map((section: any, index: number) => {
        return (
          <Section
            section={section}
            key={section.title}
            length={sections?.length}
            index={index}
          />
        );
      })}
    </>
  );
};
export default FormPages;
