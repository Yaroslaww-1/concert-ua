import React from 'react';

import { CityModel } from 'src/api/models/city.model';

import { Dialog, DialogTitle, List, ListItem, Typography } from '@material-ui/core';
import styles from './styles.module.scss';
import { chunks } from 'src/common/array/split-into-chunks';
import Text from 'src/components/Text';

interface IProps {
  cities: CityModel[];
  anchorEl: HTMLDivElement | SVGSVGElement | null;
  onSelect: (id: string) => void;
}

const CitiesDialog: React.FC<IProps> = ({ cities, onSelect: propsOnSelect, anchorEl: rootElement }): JSX.Element => {
  const [open, setOpen] = React.useState<boolean>(false);

  React.useEffect(() => {
    if (rootElement) {
      rootElement.addEventListener('click', () => {
        setOpen((prevState) => !prevState);
      });
    }
  }, [rootElement]);

  const onClose = (id: string | null) => {
    if (id) {
      propsOnSelect(id);
    }
    setOpen(false);
  };

  const getColumns = (cities: CityModel[]) => {
    const citiesPerColumn = 10;
    return [...chunks(cities, citiesPerColumn)];
  };

  return (
    <Dialog
      onClose={() => onClose(null)}
      aria-labelledby="choose-city-title"
      open={open}
      classes={{ paper: styles.dialog }}
      maxWidth={false}
    >
      <DialogTitle id="choose-city-title" classes={{ root: styles.dialogTitle }}>
        <Text color="black" fontSize="3rem" fontFamily="League Gothic" textAlign="left" textTransform="uppercase">
          Choose city
        </Text>
      </DialogTitle>
      <div className={styles.dialogInner}>
        {getColumns(cities).map((columnOfCities, index) => (
          <List key={index}>
            {columnOfCities.map((city) => (
              <ListItem key={city.id} onClick={() => onClose(city.id)} classes={{ root: styles.listItem }}>
                <Text color="black" fontSize="1.2rem">
                  {city.name}
                </Text>
              </ListItem>
            ))}
          </List>
        ))}
      </div>
    </Dialog>
  );
};

export default CitiesDialog;
