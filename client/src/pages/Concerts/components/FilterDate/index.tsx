import React from 'react';

import styles from './styles.module.scss';
import EventIcon from '@material-ui/icons/Event';
import Text from 'src/components/Text';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import Popover from '@material-ui/core/Popover';
import DatePicker from '../DatePicker';

interface IProps {}

const FilterDate: React.FC<IProps> = ({}) => {
  const [anchorEl, setAnchorEl] = React.useState<HTMLDivElement | null>(null);

  const onOpen = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    setAnchorEl(event.currentTarget);
  };

  const onClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);

  const onSelect = (from: Date, to: Date) => {
    console.log(from, to);
  };

  return (
    <div className={styles.root}>
      <div className={styles.openButton} onClick={onOpen}>
        <EventIcon />
        <Text color="black">All dates</Text>
        {open ? <ExpandMoreIcon /> : <ExpandLessIcon />}
      </div>
      <Popover
        open={open}
        anchorEl={anchorEl}
        onClose={onClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'center',
        }}
        classes={{
          paper: styles.popoverRoot,
        }}
      >
        <DatePicker onClose={onClose} onSelect={onSelect} />
      </Popover>
    </div>
  );
};

export default FilterDate;
