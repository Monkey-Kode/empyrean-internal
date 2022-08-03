import data from '../../../data';
import Button from '../../ui/Button';
import Select from '../../ui/Select';
import s from './FormIntro.module.css';
const FormIntro = () => {
  const content = data.data.forms.find((form) => form.slug === 'firmographics');
  console.log(content);
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
              />
            )
        )}
        <Button type="button" className={s.button}>
          BEGIN THE ASSESSMENT
        </Button>
      </div>
    </>
  );
};
export default FormIntro;
