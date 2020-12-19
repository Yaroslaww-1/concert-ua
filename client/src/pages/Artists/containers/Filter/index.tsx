import React from 'react';

import { createSelector } from '@reduxjs/toolkit';
import { RootState } from 'src/redux/rootReducer';
import { useDispatch, useSelector } from 'react-redux';

import { StyleModel } from 'src/api/models/style.model';
import { FilterState } from './redux/reducer';
import { IArtistFilter } from 'src/api/services/artist.service';

import { fetchStyles, selectNameFilter, selectStyleFilter } from './redux/actions';
import { parseUrlParams } from 'src/common/url/qs-helper';
import { stringifyParams } from 'src/common/url/qs-helper';
import FilterComponent from '../../components/Filter';

const filterSelector = createSelector(
  (state: RootState) => state.artists.filter.state,
  (state: FilterState) => state,
);

const FilterContainer: React.FC = () => {
  const dispatch = useDispatch();
  const {
    nameFilter: { name },
    styleFilter: { availableStyles, selectedStyles },
  } = useSelector(filterSelector);

  React.useEffect(() => {
    dispatch(fetchStyles.request());
  }, []);

  React.useEffect(() => {
    if (availableStyles.length > 0) {
      const { stylesIds, name } = parseFilterUrlParams();
      if (stylesIds) dispatch(selectStyleFilter(availableStyles.filter((style) => stylesIds.includes(style.id))));
      if (name) dispatch(selectNameFilter(name));
    }
  }, [availableStyles]);

  const onStyleSelect = (styles: StyleModel[]) => {
    updateFilterUrlParams({ ...parseFilterUrlParams(), stylesIds: styles.map((style) => style.id) });
  };

  const onNameSelect = (name: string) => {
    updateFilterUrlParams({ ...parseFilterUrlParams(), name });
  };

  const parseFilterUrlParams = (urlParams = window.location.search): IArtistFilter => {
    const parsedParams = parseUrlParams<{
      name?: string;
      stylesIds?: number[];
    }>(urlParams);
    return {
      stylesIds: parsedParams.stylesIds,
      name: parsedParams.name,
    };
  };

  const updateFilterUrlParams = (filter: IArtistFilter) => {
    const newUrlParams = stringifyParams(filter);
    window.location.search = newUrlParams;
  };

  return (
    <FilterComponent
      availableStyles={availableStyles}
      selectedStyles={selectedStyles}
      onStyleSelect={onStyleSelect}
      selectedName={name}
      onNameSelect={onNameSelect}
    />
  );
};

export default FilterContainer;
