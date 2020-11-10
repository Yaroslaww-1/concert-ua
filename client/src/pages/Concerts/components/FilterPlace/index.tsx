import React from 'react';

import PlaceIcon from '@material-ui/icons/Place';
import FilterItem from '../FilterItem';
import { PlaceModel } from 'src/api/models/place.model';
import PlacePicker from '../PlacePicker';
import { createRandomString } from 'src/common/string/create-random-string';

interface IProps {}

const FilterPlace: React.FC<IProps> = ({}) => {
  const places = [...Array(20)].map((_, index) => ({
    id: index.toString(),
    name: createRandomString(10),
    city: { id: index.toString(), name: createRandomString(10) },
  }));
  const onSelect = (places: PlaceModel[]) => {
    console.log(places);
  };

  return (
    <FilterItem<PlaceModel[]>
      icon={<PlaceIcon />}
      text="All places"
      onSelect={onSelect}
      renderPopoverContent={(onClose, onSelect) => (
        <PlacePicker onClose={onClose} onSelect={onSelect} preSelected={[]} places={places} />
      )}
    />
  );
};

export default FilterPlace;
