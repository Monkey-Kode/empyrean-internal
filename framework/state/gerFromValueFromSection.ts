import { SectionState } from '../context/form';
import getField from './getField';
interface Props {
  sectionState: SectionState | undefined;
  sectionIndexState: { index: number };
  field: { name: string };
}
const getFormValueFromSection = ({
  sectionState,
  sectionIndexState,
  field,
}: Props) => {
  const value =
    getField({
      sectionState,
      sectionIndexState,
      field,
    })?.value ?? '';

  return value;
};
export default getFormValueFromSection;
