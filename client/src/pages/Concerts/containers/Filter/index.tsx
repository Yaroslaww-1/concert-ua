import React from 'react';

import FilterDate from '../../components/FilterDate';
import FilterSection from '../../components/FilterSection';
import FilterStyles from '../../components/FilterStyle';

const FilterDateContainer: React.FC = () => {
  return (
    <FilterSection>
      <FilterDate />
      <FilterStyles />
      <FilterDate />
    </FilterSection>
  );
};

export default FilterDateContainer;
