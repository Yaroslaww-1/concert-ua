import React from 'react';

import styles from './styles.module.scss';
import FilterSection from 'src/components/Filter/FilterSection';
import FilterStyles from 'src/components/Filter/Filters/FilterStyle';
import FilterName from '../../components/FilterName';
import { StyleModel } from 'src/api/models/style.model';

interface IProps {
  availableStyles: StyleModel[];
  selectedStyles: StyleModel[];
  onStyleSelect: (styles: StyleModel[]) => void;
  selectedName: string;
  onNameSelect: (name: string) => void;
}

const FilterComponent: React.FC<IProps> = ({
  availableStyles,
  selectedStyles,
  onStyleSelect,
  onNameSelect,
  selectedName,
}) => {
  return (
    <FilterSection classes={{ content: styles.content }}>
      <FilterStyles styles={availableStyles} selectedStyles={selectedStyles} onSelect={onStyleSelect} />
      <FilterName selectedName={selectedName} onNameSelect={onNameSelect} />
    </FilterSection>
  );
};

export default FilterComponent;
