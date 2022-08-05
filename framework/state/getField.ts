import { SectionState } from '../context/form';

interface Props {
  sectionState: SectionState | undefined;
  sectionIndexState: { index: number };
  field: { name: string };
}

const getField = ({ sectionState, sectionIndexState, field }: Props) => {
  return sectionState?.[`section_${sectionIndexState.index}`]?.fields.find(
    (f) => f && f.name === field.name
  );
};

export default getField;
