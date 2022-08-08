const normalizeScores = (scores: number[]) => {
  const normalizeScores = scores.reduce(
    (
      acc: {
        [key: string]: number;
      },
      score,
      index
    ) => {
      const slug = `section_${index + 1}`;
      acc[slug] = score;
      return acc;
    },
    {}
  );
  return normalizeScores;
};
export default normalizeScores;
