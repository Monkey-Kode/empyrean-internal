import data from '../../data';
import { State } from '../context/form';

interface SectionProps {
  formState: State;
  index: number;
}
const calculateSectionScore = ({ formState, index }: SectionProps) => {
  const results = formState.find((form) => {
    const key = form && Object.keys(form)[0];
    return key === `section_${index}`;
  });
  const sectionData = results?.[`section_${index}`];
  const score = sectionData?.fields?.reduce((acc, curr) => {
    return acc + Number(curr?.value) * Number(curr?.weight);
  }, 0);
  const totalScore = Number(score) * Number(sectionData?.weight);
  return totalScore;
};

const getSection = ({ sectionIndex }: { sectionIndex: number }) => {
  const sections = data.data.forms.find(
    (form: any) => form.slug === 'assessment'
  )?.sections;
  const currentSection = sections?.[sectionIndex];
  return currentSection;
};

const isLowScore = ({
  score,
  sectionIndex,
}: {
  score: number;
  sectionIndex: number;
}) => {
  const lowScore = getSection({
    sectionIndex,
  })?.lowScore;
  console.log('lowScore', lowScore);
  return score <= Number(lowScore);
};

const isMediumScore = ({
  score,
  sectionIndex,
}: {
  score: number;
  sectionIndex: number;
}) => {
  const lowScore = getSection({
    sectionIndex,
  })?.lowScore;
  const mediumScore = getSection({
    sectionIndex,
  })?.mediumScore;
  return score > Number(lowScore) && score <= Number(mediumScore);
};

const isHighScore = ({
  score,
  sectionIndex,
}: {
  score: number;
  sectionIndex: number;
}) => {
  const mediumScore = getSection({
    sectionIndex,
  })?.mediumScore;
  const highScore = getSection({
    sectionIndex,
  })?.highScore;
  return score > Number(mediumScore);
};

const calculateTotalScore = ({}) => {};
export {
  calculateSectionScore,
  calculateTotalScore,
  isLowScore,
  isMediumScore,
  isHighScore,
};
