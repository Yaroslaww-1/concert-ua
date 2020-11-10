import React from 'react';

import styles from './styles.module.scss';

import BorderlessTransparentButton from 'src/components/Buttons/BorderlessTransparentButton';
import ColoredButton from 'src/components/Buttons/ColoredButton';
import CheckboxList from 'src/components/CheckboxList';
import { PlaceModel } from 'src/api/models/place.model';
import SearchInput from 'src/components/Inputs/SearchInput';
import Text from 'src/components/Text';

interface IProps {
  places: PlaceModel[];
  preSelected: PlaceModel[];
  onClose: () => void;
  onSelect: (places: PlaceModel[]) => void;
}

const PlacePicker: React.FC<IProps> = ({ places, preSelected, onClose, onSelect }) => {
  const [selectedPlaces, setSelectedPlaces] = React.useState<PlaceModel[]>(preSelected);
  const [filteredPlaces, setFilteredPlaces] = React.useState<PlaceModel[]>(places);

  const onToggle = (place: PlaceModel, action: 'select' | 'unselect') => {
    if (action === 'select') {
      setSelectedPlaces([...selectedPlaces, place]);
    } else {
      setSelectedPlaces(selectedPlaces.filter((_style) => _style.id !== place.id));
    }
  };

  const onSubmitSelect = () => {
    onSelect(selectedPlaces);
    onClose();
  };

  const onInputChange = (newPlace: string) => {
    setFilteredPlaces(places.filter((place) => place.name.startsWith(newPlace)));
  };

  return (
    <div className={styles.root}>
      <SearchInput
        id="search-place-input"
        onEdit={onInputChange}
        placeholder="Search place"
        classes={{ root: styles.inputRoot }}
      />
      {filteredPlaces.length > 0 ? (
        <CheckboxList<PlaceModel>
          items={filteredPlaces}
          preSelected={preSelected}
          onToggle={onToggle}
          classes={{ root: styles.contentRoot, checkboxRoot: styles.checkboxRoot }}
        />
      ) : (
        <div className={styles.notFoundText}>
          <Text color="gray">Nothing was found :(</Text>
        </div>
      )}
      <div className={styles.confirmingButtons}>
        <BorderlessTransparentButton onClick={onClose} text="Cancel" color="gray" />
        <ColoredButton onClick={onSubmitSelect} text="Submit" />
      </div>
    </div>
  );
};

export default PlacePicker;
