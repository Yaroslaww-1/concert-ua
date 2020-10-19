import React from 'react';

import { CityModel } from 'src/api/models/city.model';

import { Dialog, DialogTitle, List, ListItem, Typography } from '@material-ui/core';
import styles from './styles.module.scss';
import { chunks } from 'src/common/array/split-into-chunks';

interface IProps {
  cities: CityModel[];
  anchorEl: HTMLDivElement | null;
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
        <Typography variant="h3" component="h1">
          Choose city
        </Typography>
      </DialogTitle>
      <div className={styles.dialogInner}>
        {getColumns(cities).map((columnOfCities, index) => (
          <List key={index}>
            {columnOfCities.map((city) => (
              <ListItem key={city.id} onClick={() => onClose(city.id)} classes={{ root: styles.listItem }}>
                {city.name}
              </ListItem>
            ))}
          </List>
        ))}
      </div>
    </Dialog>
  );
};

export default CitiesDialog;
