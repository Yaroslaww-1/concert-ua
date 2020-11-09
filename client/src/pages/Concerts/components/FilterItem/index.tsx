import React from 'react';

import styles from './styles.module.scss';
import Text from 'src/components/Text';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import Popover from '@material-ui/core/Popover';

interface IProps<P> {
  icon: JSX.Element;
  text: string;
  onSelect: (payload: P) => void;
  renderPopoverContent: (onClose: () => void, onSelect: (payload: P) => void) => JSX.Element;
}

const FilterItem = <P extends object>({ icon, text, onSelect, renderPopoverContent }: IProps<P>) => {
  const [anchorEl, setAnchorEl] = React.useState<HTMLDivElement | null>(null);

  const onOpen = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    setAnchorEl(event.currentTarget);
  };

  const onClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);

  return (
    <div className={`${styles.root} ${open && styles.open}`}>
      <div className={`${styles.openButton}`} onClick={onOpen}>
        {icon}
        <Text color="black">{text}</Text>
        {open ? <ExpandMoreIcon /> : <ExpandLessIcon />}
      </div>
      <Popover
        open={open}
        anchorEl={anchorEl}
        onClose={onClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
        classes={{
          paper: styles.popoverRoot,
        }}
      >
        {renderPopoverContent(onClose, onSelect)}
      </Popover>
    </div>
  );
};

export default FilterItem;
