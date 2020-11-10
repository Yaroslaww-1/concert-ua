import React from 'react';

import EventIcon from '@material-ui/icons/Event';
import DatePicker from '../../Pickers/DatePicker';
import FilterItem from '../../FilterItem';
import { getDifferenceInYears, formatDate } from 'src/common/date/date.helper';

interface IProps {
  from: Date;
  to: Date;
  onSelect: (payload: { from: Date; to: Date }) => void;
}

const FilterDate: React.FC<IProps> = ({ from, to, onSelect }) => {
  const getText = () => {
    if (getDifferenceInYears(from, to) >= 1) return 'All dates';
    const options = { year: 'numeric', month: 'numeric', day: 'numeric' };
    return `${formatDate(from, options)} - ${formatDate(to, options)}`;
  };

  return (
    <FilterItem<{ from: Date; to: Date }>
      icon={<EventIcon />}
      text={getText()}
      onSelect={onSelect}
      renderPopoverContent={(onClose, onSelect) => <DatePicker onClose={onClose} onSelect={onSelect} />}
    />
  );
};

export default FilterDate;
