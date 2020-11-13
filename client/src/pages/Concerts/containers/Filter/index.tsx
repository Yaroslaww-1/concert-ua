import React from 'react';

import { createSelector } from '@reduxjs/toolkit';
import { RootState } from 'src/redux/rootReducer';
import { useDispatch, useSelector } from 'react-redux';

import FilterDate from '../../components/Filters/FilterDate';
import FilterPlace from '../../components/Filters/FilterPlace';
import FilterSection from '../../components/FilterSection';
import FilterStyles from '../../components/Filters/FilterStyle';
import { FilterState } from './redux/reducer';
import { PlaceModel } from 'src/api/models/place.model';
import { StyleModel } from 'src/api/models/style.model';
import { fetchPlaces, fetchStyles, selectDateFilter, selectStyleFilter, selectPlaceFilter } from './redux/actions';
import { IEventFilter } from 'src/api/services/event.service';
import { parseUrlParams } from 'src/common/url/params-parser';
import { stringifyParams } from 'src/common/url/stringify-params';

const filterSelector = createSelector(
  (state: RootState) => state.concerts.filter.state,
  (state: FilterState) => state,
);

const FilterDateContainer: React.FC = () => {
  const dispatch = useDispatch();
  const {
    dateFilter: {
      date: { from, to },
    },
    styleFilter: { availableStyles, selectedStyles },
    placeFilter: { availablePlaces, selectedPlaces },
  } = useSelector(filterSelector);

  React.useEffect(() => {
    dispatch(fetchStyles.request());
    dispatch(fetchPlaces.request());
  }, []);

  React.useEffect(() => {
    if (availablePlaces.length > 0 && availableStyles.length > 0) {
      const { date, stylesIds, placesIds } = parseFilterUrlParams();
      if (date) dispatch(selectDateFilter({ date }));
      if (stylesIds) dispatch(selectStyleFilter(availableStyles.filter((style) => stylesIds.includes(style.id))));
      if (placesIds) dispatch(selectPlaceFilter(availablePlaces.filter((place) => placesIds.includes(place.id))));
    }
  }, [availablePlaces, availableStyles]);

  const onDateSelect = (date: { from: Date; to: Date }) => {
    updateFilterUrlParams({ ...parseFilterUrlParams(), date });
  };
  const onStyleSelect = (styles: StyleModel[]) => {
    updateFilterUrlParams({ ...parseFilterUrlParams(), stylesIds: styles.map((style) => style.id) });
  };
  const onPlaceSelect = (places: PlaceModel[]) => {
    updateFilterUrlParams({ ...parseFilterUrlParams(), placesIds: places.map((place) => place.id) });
  };

  const parseFilterUrlParams = (urlParams = window.location.search): IEventFilter => {
    const parsedParams = parseUrlParams<{
      date?: { from: Date; to: Date };
      stylesIds?: string[];
      placesIds?: string[];
    }>(urlParams);
    return {
      date: {
        from: new Date(parsedParams.date?.from || new Date()),
        to: new Date(parsedParams.date?.to || new Date()),
      },
      stylesIds: parsedParams.stylesIds,
      placesIds: parsedParams.placesIds,
    };
  };

  const updateFilterUrlParams = (filter: IEventFilter) => {
    const newUrlParams = stringifyParams(filter);
    window.location.search = newUrlParams;
  };

  return (
    <FilterSection>
      <FilterDate from={from} to={to} onSelect={onDateSelect} />
      <FilterStyles styles={availableStyles} selectedStyles={selectedStyles} onSelect={onStyleSelect} />
      <FilterPlace places={availablePlaces} selectedPlaces={selectedPlaces} onSelect={onPlaceSelect} />
    </FilterSection>
  );
};

export default FilterDateContainer;
