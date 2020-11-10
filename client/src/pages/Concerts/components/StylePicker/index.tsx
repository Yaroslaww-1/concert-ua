import React from 'react';

import cssStyles from './styles.module.scss';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import { StyleModel } from 'src/api/models/style.model';
import Text from 'src/components/Text';

interface IProps {
  styles: StyleModel[];
  preSelected: StyleModel[];
  onClose: () => void;
  onSelect: (styles: StyleModel[]) => void;
}

const StylePicker: React.FC<IProps> = ({ styles, preSelected, onClose }) => {
  const [selectedStyles, setSelectedStyles] = React.useState<StyleModel[]>(preSelected);

  const isStyleSelected = (style: StyleModel) => {
    return selectedStyles.some((_style) => _style.id === style.id);
  };

  const onToggle = (style: StyleModel) => {
    if (!isStyleSelected(style)) {
      setSelectedStyles([...selectedStyles, style]);
    } else {
      setSelectedStyles(selectedStyles.filter((_style) => _style.id !== style.id));
    }
  };

  return (
    <FormGroup classes={{ root: cssStyles.root }}>
      {styles.map((style) => (
        <FormControlLabel
          key={style.id}
          control={
            <Checkbox
              className={cssStyles.checkboxRoot}
              disableRipple
              color="default"
              checkedIcon={<span className={`${cssStyles.icon} ${cssStyles.checkedIcon}`} />}
              icon={<span className={cssStyles.icon} />}
              inputProps={{ 'aria-label': 'decorative checkbox' }}
            />
          }
          label={
            <Text textTransform="capitalize" color="black" classes={{ root: cssStyles.styleNameText }} lineHeight={1.3}>
              {style.name}
            </Text>
          }
        />
      ))}
    </FormGroup>
  );
};

export default StylePicker;
