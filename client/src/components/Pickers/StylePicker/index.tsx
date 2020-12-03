import React from 'react';

import cssStyles from './styles.module.scss';

import { StyleModel } from 'src/api/models/style.model';
import BorderlessTransparentButton from 'src/components/Buttons/BorderlessTransparentButton';
import ColoredButton from 'src/components/Buttons/ColoredButton';
import CheckboxList from 'src/components/CheckboxList';

interface IProps {
  styles: StyleModel[];
  preSelected: StyleModel[];
  onClose: () => void;
  onSelect: (styles: StyleModel[]) => void;
}

const StylePicker: React.FC<IProps> = ({ styles, preSelected, onClose, onSelect }) => {
  const [selectedStyles, setSelectedStyles] = React.useState<StyleModel[]>(preSelected);

  const onToggle = (style: StyleModel, action: 'select' | 'unselect') => {
    if (action === 'select') {
      setSelectedStyles([...selectedStyles, style]);
    } else {
      setSelectedStyles(selectedStyles.filter((_style) => _style.id !== style.id));
    }
  };

  const onSubmitSelect = () => {
    onSelect(selectedStyles);
    onClose();
  };

  return (
    <>
      <CheckboxList<StyleModel>
        items={styles}
        preSelected={preSelected}
        onToggle={onToggle}
        classes={{ root: cssStyles.root }}
      />
      <div className={cssStyles.confirmingButtons}>
        <BorderlessTransparentButton onClick={onClose} text="Cancel" color="red" />
        <ColoredButton onClick={onSubmitSelect} text="Submit" />
      </div>
    </>
  );
};

export default StylePicker;
