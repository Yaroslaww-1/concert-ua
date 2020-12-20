export const fromStringToNumberArray = (str: string): number[] => {
  return str.split(',').map(Number);
};
