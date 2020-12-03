import React from 'react';

import FilterItem from 'src/components/Filter/FilterItem';
import { StyleModel } from 'src/api/models/style.model';
import StyleIcon from '@material-ui/icons/Style';
import StylePicker from 'src/components/Pickers/StylePicker';

interface IProps {
  styles: StyleModel[];
  selectedStyles: StyleModel[];
  onSelect: (styles: StyleModel[]) => void;
}

const FilterStyles: React.FC<IProps> = ({ styles, selectedStyles, onSelect }) => {
  const getText = () => (selectedStyles.length > 0 ? `${selectedStyles.length} styles` : 'All styles');

  return (
    <FilterItem<StyleModel[]>
      icon={<StyleIcon />}
      text={getText()}
      onSelect={onSelect}
      renderPopoverContent={(onClose, onSelect) => (
        <StylePicker onClose={onClose} onSelect={onSelect} preSelected={selectedStyles} styles={styles} />
      )}
    />
  );
};

export default FilterStyles;
