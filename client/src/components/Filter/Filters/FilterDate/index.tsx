import React from 'react';

import EventIcon from '@material-ui/icons/Event';
import DatePicker from 'src/components/Pickers/DatePicker';
import FilterItem from 'src/components/Filter/FilterItem';
import { getDifferenceInYears, formatDateToDayMonthYear } from 'src/common/date/date.helper';

interface IProps {
  from: Date;
  to: Date;
  onSelect: (payload: { from: Date; to: Date }) => void;
}

const FilterDate: React.FC<IProps> = ({ from, to, onSelect }) => {
  const getText = () => {
    if (getDifferenceInYears(from, to) >= 1) return 'All dates';
    return `${formatDateToDayMonthYear(from, '.')} - ${formatDateToDayMonthYear(to, '.')}`;
  };

  return (
    <FilterItem<{ from: Date; to: Date }>
      icon={<EventIcon />}
      text={getText()}
      onSelect={onSelect}
      renderPopoverContent={(onClose, onSelect) => (
        <DatePicker from={from} to={to} onClose={onClose} onSelect={onSelect} />
      )}
    />
  );
};

export default FilterDate;