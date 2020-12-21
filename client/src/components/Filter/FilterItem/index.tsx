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

  const toggleOpen = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (!anchorEl) setAnchorEl(event.currentTarget);
    else setAnchorEl(null);
  };

  const onClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);

  return (
    <div className={`${styles.root} ${open && styles.open}`}>
      <div className={`${styles.openButton}`} onClick={toggleOpen}>
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
          paper: styles.popoverPaper,
        }}
        transitionDuration={0}
      >
        {renderPopoverContent(onClose, onSelect)}
      </Popover>
    </div>
  );
};

export default FilterItem;
