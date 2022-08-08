import { useState } from 'react';
import data from '../../../data';
import { useFormState } from '../../../framework/context/form';
import { useSectionIndex } from '../../../framework/context/section';
import getFormValueFromSection from '../../../framework/state/gerFromValueFromSection';
import getSectionState from '../../../framework/state/getSectionState';
import Button from '../../ui/Button';
import ErrorMessage from '../../ui/ErrorMessage';
import Select from '../../ui/Select';
import s from './FormIntro.module.css';
const FormIntro = () => {
  const { dispatch: sectionDispatch } = useSectionIndex();
  const { state: formState, dispatch: formDispatch } = useFormState();
  const [errorMessage, setErrorMessage] = useState('');
  const content = data.data.forms.find(
    (form: any) => form.slug === 'firmographics'
  );
  const { state: sectionIndexState } = useSectionIndex();
  const pageContent = data.data.pages.find(
    (page: any) => page.slug === 'participate'
  )?.content;
  const sectionState = getSectionState({ formState, sectionIndexState });
  const sectionFields =
    sectionState?.[`section_${sectionIndexState.index}`]?.fields;

  return (
    <>
      <div className={s.root}>
        <p>{content?.description}</p>
        <h2 className={s.preTitle}>{content?.title}</h2>
        {errorMessage && <ErrorMessage message={errorMessage} />}
        {content?.fields?.map((field: any) => {
          const value = getFormValueFromSection({
            sectionState,
            sectionIndexState,
            field,
          });

          return (
            field.type === 'select' && (
              <Select
                key={field.name}
                label={`${field.label}*`}
                options={field.options}
                name={field.name}
                value={value}
                onChange={(e) => {
                  formDispatch({
                    type: 'UPDATE_FIELD',
                    payload: {
                      name: field.name,
                      value: e.target.value,
                      section: Number(sectionIndexState.index),
                    },
                  });
                }}
              />
            )
          );
        })}
        <Button
          type="button"
          className={s.button}
          onClick={(e) => {
            e.preventDefault();
            const allFieldsSelected = sectionFields?.every(
              (field: any) => field.value !== ''
            );
            if (allFieldsSelected) {
              setErrorMessage('');
              sectionDispatch({ type: 'set', payload: 0 });
            } else {
              setErrorMessage('Please select all fields');
            }
          }}
        >
          {pageContent?.find((content: any) => content.type === 'cta')?.content}
        </Button>
        <small className={s.small}>
          {
            pageContent?.find((content: any) => content.type === 'policy')
              ?.content
          }
        </small>
      </div>
    </>
  );
};
export default FormIntro;
