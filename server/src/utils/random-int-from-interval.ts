export const randomIntFromInterval = (min: number, max: number): number => {
  const randomNumber = Math.random() * (max - min) + min;
  return parseFloat(randomNumber.toFixed(2));
};
