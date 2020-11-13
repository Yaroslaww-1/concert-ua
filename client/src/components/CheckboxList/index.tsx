import React from 'react';

import styles from './styles.module.scss';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Text from 'src/components/Text';

interface IItem {
  name: string;
  id: string | number;
}

interface IProps<T extends IItem> {
  items: T[];
  preSelected: T[];
  onToggle: (item: T, action: 'select' | 'unselect') => void;
  classes?: {
    root?: string;
    checkboxRoot?: string;
  };
}
const CheckboxList = <T extends IItem>({
  items,
  preSelected,
  onToggle: onToggleProps,
  classes = { root: '', checkboxRoot: '' },
}: IProps<T>) => {
  const [selectedItems, setSelectedItems] = React.useState<T[]>(preSelected);

  const isItemSelected = (item: T) => {
    return selectedItems.some((_item) => _item.id === item.id);
  };

  const onToggle = (item: T) => {
    if (!isItemSelected(item)) {
      setSelectedItems([...selectedItems, item]);
      onToggleProps(item, 'select');
    } else {
      setSelectedItems(selectedItems.filter((_style) => _style.id !== item.id));
      onToggleProps(item, 'unselect');
    }
  };

  return (
    <FormGroup classes={{ root: `${styles.root} ${classes.root || ''}` }}>
      {items.map((item) => (
        <FormControlLabel
          className={styles.label}
          key={item.id}
          control={
            <Checkbox
              className={`${styles.checkboxRoot} ${classes.checkboxRoot || ''}`}
              disableRipple
              color="default"
              checkedIcon={<span className={`${styles.icon} ${styles.checkedIcon}`} />}
              checked={isItemSelected(item)}
              icon={<span className={styles.icon} />}
              inputProps={{ 'aria-label': 'decorative checkbox' }}
              onChange={() => onToggle(item)}
            />
          }
          label={
            <Text textTransform="capitalize" color="black" classes={{ root: styles.styleNameText }} lineHeight={1.3}>
              {item.name}
            </Text>
          }
        />
      ))}
    </FormGroup>
  );
};

export default CheckboxList;
