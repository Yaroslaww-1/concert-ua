import React from 'react';

import { createSelector } from '@reduxjs/toolkit';
import { RootState } from 'src/redux/rootReducer';
import { useDispatch, useSelector } from 'react-redux';

import { FilterState } from './redux/reducer';
import { IArtistFilter } from 'src/api/services/artist.service';

import { fetchStyles } from './redux/actions';
import FilterComponent from '../../components/Filter';
import { fetchArtists } from '../ArtistsSection/redux/actions';
import { useFilter } from 'src/common/hooks/use-filter';

const filterSelector = createSelector(
  (state: RootState) => state.artists.filter.state,
  (state: FilterState) => state,
);

const FilterContainer: React.FC = () => {
  const dispatch = useDispatch();
  const { availableStyles } = useSelector(filterSelector);

  const parseFilterUrlParams = (parsedFilterFromUrl: IArtistFilter): IArtistFilter => {
    return {
      stylesIds: ([] as number[]).concat(parsedFilterFromUrl.stylesIds || []),
      name: parsedFilterFromUrl.name,
    };
  };

  const { filter, updateFilterUrlParam } = useFilter<IArtistFilter>({
    fetchItems: () => {
      dispatch(fetchArtists.request());
    },
    parseFilter: parseFilterUrlParams,
  });

  React.useEffect(() => {
    dispatch(fetchStyles.request());
  }, []);

  const { stylesIds = [], name = '' } = filter;

  return (
    <FilterComponent
      availableStyles={availableStyles}
      selectedStyles={availableStyles.filter((style) => stylesIds.includes(style.id))}
      onStyleSelect={(styles) => updateFilterUrlParam('stylesIds')(styles.map((style) => style.id))}
      selectedName={name}
      onNameSelect={updateFilterUrlParam('name')}
    />
  );
};

export default FilterContainer;
