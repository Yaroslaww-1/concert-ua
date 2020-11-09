import React from 'react';

import FilterItem from '../FilterItem';
import { StyleModel } from 'src/api/models/style.model';
import StyleIcon from '@material-ui/icons/Style';
import StylePicker from '../StylePicker';
import { createRandomString } from 'src/common/string/create-random-string';

interface IProps {}

const FilterStyles: React.FC<IProps> = ({}) => {
  const styles = [...Array(20)].map((_, index) => ({ id: index.toString(), name: createRandomString(10) }));
  const onSelect = (styles: StyleModel[]) => {
    console.log(styles.map((s) => s.id));
  };

  return (
    <FilterItem<StyleModel[]>
      icon={<StyleIcon />}
      text="All styles"
      onSelect={onSelect}
      renderPopoverContent={(onClose, onSelect) => (
        <StylePicker onClose={onClose} onSelect={onSelect} preSelected={[]} styles={styles} />
      )}
    />
  );
};

export default FilterStyles;
