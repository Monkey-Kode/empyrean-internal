import data from '../../data';
import { State } from '../context/form';
import { calculateSectionScore } from './calculateScores';
interface ScoresProps {
  formState: State;
}
const getScores = ({ formState }: ScoresProps) => {
  const sectionContent = data.data.forms.find(
    (form: any) => form.slug === 'assessment'
  )?.sections;
  const scores = sectionContent.map((section: any, index: number) => {
    return calculateSectionScore({
      formState,
      index,
    });
  });

  return scores;
};
export default getScores;
