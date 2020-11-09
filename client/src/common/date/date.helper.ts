export const addDaysToDate = (date: Date, daysToAdd: number) => {
  const newDate = new Date(date);
  newDate.setDate(date.getDate() + daysToAdd);
  return newDate;
};

export const subtractDaysFromDate = (date: Date, daysToSubtract: number) => {
  const newDate = new Date(date);
  newDate.setDate(date.getDate() - daysToSubtract);
  return newDate;
};

export const addMonthsToDate = (date: Date, monthToAdd: number) => {
  const newDate = new Date(date);
  newDate.setMonth(date.getMonth() + monthToAdd);
  return newDate;
};

export const subtractMonthsFromDate = (date: Date, monthsToSubtract: number) => {
  const newDate = new Date(date);
  newDate.setMonth(date.getMonth() - monthsToSubtract);
  return newDate;
};

export const isDateEqual = (date1: Date, date2: Date) => {
  return (
    date1.getDate() === date2.getDate() &&
    date1.getMonth() === date2.getMonth() &&
    date1.getFullYear() === date2.getFullYear()
  );
};

export const isDateLess = (date: Date, compareTo: Date) => {
  return (
    date.getDate() <= compareTo.getDate() &&
    date.getMonth() <= compareTo.getMonth() &&
    date.getFullYear() <= compareTo.getFullYear()
  );
};

export const getFirstDateOfMonth = (date: Date) => {
  const firstDate = new Date(date.getFullYear(), date.getMonth(), 1);
  return firstDate;
};

export const getLastDateOfMonth = (date: Date) => {
  const lastDate = new Date(date.getFullYear(), date.getMonth() + 1, 0);
  return lastDate;
};
