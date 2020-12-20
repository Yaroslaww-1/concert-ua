import React from 'react';
import { Menu, MenuItem } from '@material-ui/core';
import styles from './styles.module.scss';
import Text from 'src/components/Text';

interface IProps {
  dates: string[];
  anchorEl: HTMLElement | null;
  onSelect: (id: string) => void;
}

const DatesMenu: React.FC<IProps> = ({ dates, anchorEl: rootElement, onSelect: propsOnSelect }): JSX.Element => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  React.useEffect(() => {
    if (rootElement) {
      rootElement.addEventListener('click', () => {
        setAnchorEl(rootElement);
      });
    }
  }, [rootElement]);

  const onClose = (id: string | null) => {
    if (id) {
      propsOnSelect(id);
    }
    setAnchorEl(null);
  };

  return (
    <Menu
      id="simple-menu"
      anchorEl={anchorEl}
      keepMounted
      open={Boolean(anchorEl)}
      onClose={() => onClose(null)}
      classes={{ paper: styles.menuRoot, list: styles.menuList }}
    >
      {dates.map((date) => (
        <MenuItem onClick={() => onClose(date)} key={date} classes={{ root: styles.menuItemRoot }}>
          <Text color="black" fontSize="2.375rem" lineHeight={1} textTransform="uppercase" fontFamily="League Gothic">
            {date}
          </Text>
        </MenuItem>
      ))}
    </Menu>
  );
};

export default DatesMenu;
