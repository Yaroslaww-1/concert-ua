import React from 'react';

import PlaceIcon from '@material-ui/icons/Place';
import FilterItem from '../../FilterItem';
import { PlaceModel } from 'src/api/models/place.model';
import PlacePicker from '../../Pickers/PlacePicker';

interface IProps {
  places: PlaceModel[];
  selectedPlaces: PlaceModel[];
  onSelect: (places: PlaceModel[]) => void;
}

const FilterPlace: React.FC<IProps> = ({ selectedPlaces, onSelect, places }) => {
  const getText = () => (selectedPlaces.length > 0 ? `${selectedPlaces.length} places` : 'All places');

  return (
    <FilterItem<PlaceModel[]>
      icon={<PlaceIcon />}
      text={getText()}
      onSelect={onSelect}
      renderPopoverContent={(onClose, onSelect) => (
        <PlacePicker onClose={onClose} onSelect={onSelect} preSelected={selectedPlaces} places={places} />
      )}
    />
  );
};

export default FilterPlace;
