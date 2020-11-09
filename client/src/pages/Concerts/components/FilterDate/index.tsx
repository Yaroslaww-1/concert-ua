import React from 'react';

import EventIcon from '@material-ui/icons/Event';
import DatePicker from '../DatePicker';
import FilterItem from '../FilterItem';

interface IProps {}

const FilterDate: React.FC<IProps> = ({}) => {
  const onSelect = (payload: { from: Date; to: Date }) => {
    const { from, to } = payload;
    console.log(from, to);
  };

  return (
    <FilterItem<{ from: Date; to: Date }>
      icon={<EventIcon />}
      text="All dates"
      onSelect={onSelect}
      renderPopoverContent={(onClose, onSelect) => <DatePicker onClose={onClose} onSelect={onSelect} />}
    />
  );
};

export default FilterDate;
