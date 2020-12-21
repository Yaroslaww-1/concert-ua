import React from 'react';

import styles from './styles.module.scss';
import ReactDatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import ColoredButton from 'src/components/Buttons/ColoredButton';
import {
  addDaysToDate,
  addMonthsToDate,
  isDateEqual,
  isDateLess,
  subtractMonthsFromDate,
  getFirstDateOfMonth,
  getLastDateOfMonth,
  formatDateToMonthYear,
} from 'src/common/date/date.helper';
import BorderlessTransparentButton from 'src/components/Buttons/BorderlessTransparentButton';

interface IProps {
  from: Date;
  to: Date;
  onClose: () => void;
  onSelect: (payload: { from: Date; to: Date }) => void;
}

const DatePickerComponent: React.FC<IProps> = ({ from, to, onClose, onSelect }) => {
  const [startDate, setStartDate] = React.useState<Date>(from || new Date());
  const [visibleMonth, setVisibleMonth] = React.useState<number>((from || new Date()).getMonth());
  const [endDate, setEndDate] = React.useState<Date | null>(to || null);
  const onChange = (dates: Date | [Date, Date]) => {
    if (dates instanceof Date) {
      setStartDate(dates);
      setVisibleMonth(dates.getMonth());
    } else {
      const [start, end] = dates;
      setStartDate(start);
      setEndDate(end);
      setVisibleMonth(start.getMonth());
    }
  };

  const getDayClassNameBySelection = (date: Date) => {
    const dayStyles = {
      selected: styles.selected,
      unselected: styles.unSelected,
    };
    if (startDate === null) return dayStyles.unselected;
    if (endDate === null) {
      if (isDateEqual(startDate, date)) return dayStyles.selected;
      else return dayStyles.unselected;
    }
    if (isDateLess(startDate, date) && isDateLess(date, endDate)) {
      return dayStyles.selected;
    }
    return dayStyles.unselected;
  };

  const getDayClassNameByMonth = (date: Date) => {
    const dayStyles = {
      currentMonth: styles.currentMonth,
      notCurrentMonth: styles.notCurrentMonth,
    };
    if (!startDate) return dayStyles.currentMonth;
    if (date.getMonth() !== visibleMonth) return dayStyles.notCurrentMonth;
    return dayStyles.currentMonth;
  };

  const getDateString = (date: Date) => formatDateToMonthYear(date);

  const onSubmitSelect = () => {
    onSelect({ from: startDate, to: endDate ? endDate : startDate });
    onClose();
  };

  return (
    <>
      <div className={styles.pickingButtons}>
        <ColoredButton
          text="Tomorrow"
          variant="gray"
          classes={{ root: styles.button, text: { fontSize: '0.75rem', fontWeight: 600, textTransform: 'capitalize' } }}
          onClick={() => onChange([addDaysToDate(new Date(), 1), addDaysToDate(new Date(), 1)])}
        />
        <ColoredButton
          text="Next week"
          variant="gray"
          classes={{ root: styles.button, text: { fontSize: '0.75rem', fontWeight: 600, textTransform: 'capitalize' } }}
          onClick={() => onChange([addDaysToDate(new Date(), 1), addDaysToDate(new Date(), 8)])}
        />
        <ColoredButton
          text="Next month"
          variant="gray"
          classes={{ root: styles.button, text: { fontSize: '0.75rem', fontWeight: 600, textTransform: 'capitalize' } }}
          onClick={() =>
            onChange([
              getFirstDateOfMonth(addMonthsToDate(new Date(), 1)),
              getLastDateOfMonth(addMonthsToDate(new Date(), 1)),
            ])
          }
        />
        <ColoredButton
          text="All dates"
          variant="gray"
          classes={{ root: styles.button, text: { fontSize: '0.75rem', fontWeight: 600, textTransform: 'capitalize' } }}
          onClick={() =>
            onChange([getFirstDateOfMonth(new Date()), getLastDateOfMonth(addMonthsToDate(new Date(), 12))])
          }
        />
      </div>
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
            <button
              onClick={() => {
                decreaseMonth();
                setVisibleMonth(subtractMonthsFromDate(date, 1).getMonth());
              }}
              disabled={prevMonthButtonDisabled}
              className={styles.buttonPrev}
            >
              <NavigateBeforeIcon />
            </button>
            <div className={styles.date}>{getDateString(date)}</div>
            <button
              onClick={() => {
                increaseMonth();
                setVisibleMonth(addMonthsToDate(date, 1).getMonth());
              }}
              disabled={nextMonthButtonDisabled}
              className={styles.buttonNext}
            >
              <NavigateNextIcon />
            </button>
          </div>
        )}
      />
      <div className={styles.confirmingButtons}>
        <BorderlessTransparentButton onClick={onClose} text="Cancel" color="red" />
        <ColoredButton onClick={onSubmitSelect} text="Submit" />
      </div>
    </>
  );
};

export default DatePickerComponent;
