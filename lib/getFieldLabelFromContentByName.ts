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
  const form = data.data.forms.find((form) => {
    return form.slug === formName;
  });
  const fields = form?.fields;
  const field = fields?.find((field) => {
    return field.name === fieldName;
  });
  const selection = field?.options?.find((option) => {
    return option.value === value;
  });

  return selection?.label;
};
export default getFieldLabelFromContentByName;
