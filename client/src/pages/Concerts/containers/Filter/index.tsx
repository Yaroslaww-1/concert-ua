import React from 'react';

import FilterDate from '../../components/FilterDate';
import FilterPlace from '../../components/FilterPlace';
import FilterSection from '../../components/FilterSection';
import FilterStyles from '../../components/FilterStyle';

const FilterDateContainer: React.FC = () => {
  return (
    <FilterSection>
      <FilterDate />
      <FilterStyles />
      <FilterPlace />
    </FilterSection>
  );
};

export default FilterDateContainer;
