import React from 'react';

import styles from './styles.module.scss';
import SearchInput from 'src/components/Inputs/SearchInput';

interface IProps {
  selectedName: string;
  onNameSelect: (name: string) => void;
}

const FilterName: React.FC<IProps> = ({ selectedName, onNameSelect }) => {
  return (
    <SearchInput
      id="artist-name-input"
      placeholder="Artist name"
      defaultValue={selectedName}
      onSubmitSearch={onNameSelect}
      classes={{ root: styles.inputRoot }}
    />
  );
};

export default FilterName;
