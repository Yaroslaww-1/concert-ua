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
import { fetchPlaces, fetchStyles } from './redux/actions';

const filterSelector = createSelector(
  (state: RootState) => state.concerts.filter.state,
  (state: FilterState) => state,
);

const FilterDateContainer: React.FC = () => {
  const dispatch = useDispatch();
  const {
    dateFilter: { dateFrom, dateTo },
    styleFilter: { availableStyles, selectedStyles },
    placeFilter: { availablePlaces, selectedPlaces },
  } = useSelector(filterSelector);

  React.useEffect(() => {
    dispatch(fetchStyles.request());
    dispatch(fetchPlaces.request());
  }, []);

  const onDateSelect = ({ from, to }: { from: Date; to: Date }) => {
    console.log('Date selected', from, to);
  };
  const onStyleSelect = (styles: StyleModel[]) => {
    console.log('Style selected', styles);
  };
  const onPlaceSelect = (places: PlaceModel[]) => {
    console.log('Place selected', places);
  };

  return (
    <FilterSection>
      <FilterDate from={dateFrom} to={dateTo} onSelect={onDateSelect} />
      <FilterStyles styles={availableStyles} selectedStyles={selectedStyles} onSelect={onStyleSelect} />
      <FilterPlace places={availablePlaces} selectedPlaces={selectedPlaces} onSelect={onPlaceSelect} />
    </FilterSection>
  );
};

export default FilterDateContainer;
