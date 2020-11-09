import React from 'react';

import styles from './styles.module.scss';
import FilterDate from '../../components/FilterDate';
import FilterSection from '../../components/FilterSection';

const FilterDateContainer: React.FC = () => {
  return (
    <FilterSection>
      <FilterDate />
      <FilterDate />
      <FilterDate />
    </FilterSection>
  );
};

export default FilterDateContainer;
