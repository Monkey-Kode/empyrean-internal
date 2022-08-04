import data from '../../../data';
import { useFormState } from '../../../framework/context/form';
import { useSectionIndex } from '../../../framework/context/section';
import Button from '../../ui/Button';
import Select from '../../ui/Select';
import s from './FormIntro.module.css';
const FormIntro = () => {
  const { dispatch: sectionDispatch } = useSectionIndex();
  const { state: formState, dispatch: formDispatch } = useFormState();
  const content = data.data.forms.find((form) => form.slug === 'firmographics');

  return (
    <>
      <div className={s.root}>
        <p>{content?.description}</p>
        <h2 className={s.preTitle}>{content?.title}</h2>
        {content?.fields?.map(
          (field) =>
            field.type === 'select' && (
              <Select
                key={field.name}
                label={field.label}
                options={field.options}
                name={field.name}
                value={formState[field.name]}
                onChange={(e) => {
                  formDispatch({
                    type: 'UPDATE_FIELD',
                    payload: {
                      name: field.name,
                      value: e.target.value,
                    },
                  });
                  console.log('formState', formState);
                }}
              />
            )
        )}
        <Button
          type="button"
          className={s.button}
          onClick={(e) => {
            e.preventDefault();
            sectionDispatch({ type: 'set', payload: 0 });
          }}
        >
          BEGIN THE ASSESSMENT
        </Button>
      </div>
    </>
  );
};
export default FormIntro;
