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
    console.log(startDate, endDate);
  };

  const getDayClassNameBySelection = (date: Date) => {
    const dayStyles = {
      selected: styles.selected,
      unselected: styles.unSelected,
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

  const getDayClassNameByMonth = (date: Date) => {
    const dayStyles = {
      currentMonth: styles.currentMonth,
      nextMonth: styles.nextMonth,
    };
    if (!startDate) return dayStyles.currentMonth;
    if (date.getMonth() > startDate.getMonth() || date.getFullYear() > startDate.getFullYear())
      return dayStyles.nextMonth;
    return dayStyles.currentMonth;
  };

  const getDateString = (date: Date) => {
    const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long' };
    return date.toLocaleDateString('us', options);
  };

  return (
    <ReactDatePicker
      selected={startDate}
      onChange={onChange}
      startDate={startDate}
      endDate={endDate}
      selectsRange
      inline
      dayClassName={(date) => `${styles.day} ${getDayClassNameBySelection(date)} ${getDayClassNameByMonth(date)}`}
      renderCustomHeader={({
        date,
        changeYear,
        changeMonth,
        decreaseMonth,
        increaseMonth,
        prevMonthButtonDisabled,
        nextMonthButtonDisabled,
      }) => (
        <div className={styles.header}>
          <button onClick={decreaseMonth} disabled={prevMonthButtonDisabled}>
            {'<'}
          </button>
          <div className={styles.date}>{getDateString(date)}</div>
          <button onClick={increaseMonth} disabled={nextMonthButtonDisabled}>
            {'>'}
          </button>
        </div>
      )}
    />
  );
};

export default DatePickerComponent;
