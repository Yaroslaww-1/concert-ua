export const fromStringToNumberArray = (str: string): number[] => {
  const result = str
    .split(',')
    .filter(val => val !== '')
    .map(val => parseInt(val));
  return result;
};
