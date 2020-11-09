import React from 'react';

import styles from './styles.module.scss';
import ReactDatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

interface IProps {}

const DatePickerComponent: React.FC<IProps> = () => {
  const [startDate, setStartDate] = React.useState<Date | null>(new Date());
  const [endDate, setEndDate] = React.useState<Date | null>(null);
  const onChange = (dates: [Date, Date]) => {
    const [start, end] = dates;
    setStartDate(start);
    setEndDate(end);
  };

  const getDayClassName = (date: Date) => {
    const dayStyles = {
      selected: `${styles.day} ${styles.selected}`,
      unselected: `${styles.day} ${styles.unSelected}`,
    };
    if (startDate === null) return dayStyles.unselected;
    if (endDate === null) {
      if (startDate.getDate() === date.getDate()) return dayStyles.selected;
      else return dayStyles.unselected;
    }
    if (date.getDate() >= startDate.getDate() && date.getDate() <= endDate.getDate()) {
      return dayStyles.selected;
    }
    return dayStyles.unselected;
  };

  return (
    <ReactDatePicker
      selected={startDate}
      onChange={onChange}
      startDate={startDate}
      endDate={endDate}
      selectsRange
      inline
      dayClassName={getDayClassName}
    />
  );
};

export default DatePickerComponent;
