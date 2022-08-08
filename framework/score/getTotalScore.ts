const getTotalScore = (scores: number[]): number => {
  const totalScore = scores.reduce((acc, score) => {
    return acc + score;
  }, 0);
  return totalScore;
};
export default getTotalScore;
