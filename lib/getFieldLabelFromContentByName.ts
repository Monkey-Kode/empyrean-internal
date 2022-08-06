import data from '../data';

interface Props {
  formName: string | undefined;
  fieldName: string | undefined;
  value: string | number | undefined;
}
const getFieldLabelFromContentByName = ({
  formName,
  fieldName,
  value,
}: Props) => {
  const form = data.data.forms.find((form: any) => {
    return form.slug === formName;
  });
  const fields = form?.fields;
  const field = fields?.find((field: any) => {
    return field.name === fieldName;
  });
  const selection = field?.options?.find((option: any) => {
    return option.value === value;
  });

  return selection?.label;
};
export default getFieldLabelFromContentByName;
