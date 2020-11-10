import React from 'react';

import styles from './styles.module.scss';

import BorderlessTransparentButton from 'src/components/Buttons/BorderlessTransparentButton';
import ColoredButton from 'src/components/Buttons/ColoredButton';
import CheckboxList from 'src/components/CheckboxList';
import { PlaceModel } from 'src/api/models/place.model';
import SearchInput from 'src/components/Inputs/SearchInput';

interface IProps {
  places: PlaceModel[];
  preSelected: PlaceModel[];
  onClose: () => void;
  onSelect: (places: PlaceModel[]) => void;
}

const PlacePicker: React.FC<IProps> = ({ places, preSelected, onClose, onSelect }) => {
  const [selectedPlaces, setSelectedPlaces] = React.useState<PlaceModel[]>(preSelected);

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

  return (
    <div className={styles.root}>
      <SearchInput
        id="search-place-input"
        onEdit={() => {}}
        label="Search place"
        classes={{ root: styles.inputRoot }}
      />
      <CheckboxList<PlaceModel>
        items={places}
        preSelected={preSelected}
        onToggle={onToggle}
        classes={{ root: styles.contentRoot, checkboxRoot: styles.checkboxRoot }}
      />
      <div className={styles.confirmingButtons}>
        <BorderlessTransparentButton onClick={onClose} text="Cancel" color="red" />
        <ColoredButton onClick={onSubmitSelect} text="Submit" />
      </div>
    </div>
  );
};

export default PlacePicker;
