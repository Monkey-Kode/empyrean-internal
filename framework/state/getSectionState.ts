import { State } from '../context/form';

interface Props {
  formState: State;
  sectionIndexState: { index: number };
}
const getSectionState = ({ formState, sectionIndexState }: Props) => {
  return formState.find((form) => {
    const keys = typeof form === 'object' && Object.keys(form)[0];
    return keys === `section_${sectionIndexState.index}`;
  });
};
export default getSectionState;
