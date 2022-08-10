const generateRandomData = (
  count: number,
  min: number = 16,
  max: number = 75
) => {
  return Array(count)
    .fill(count)
    .map(() => Math.round(Math.random() * (max - min) + min));
};

export default generateRandomData;
