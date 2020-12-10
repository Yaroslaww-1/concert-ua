import React from 'react';
import { NavLink } from 'react-router-dom';
import { Routes } from 'src/common/enum/routes';

import { UserModel } from 'src/api/models/user.model';

import styles from './styles.module.scss';
import EventIcon from '@material-ui/icons/Event';
import LocationCityIcon from '@material-ui/icons/LocationCity';
import DatesMenu from '../DatesMenu';
import CitiesDialog from '../CitiesDialog';
import { CityModel } from 'src/api/models/city.model';
import MenuIcon from '@material-ui/icons/Menu';
import Drawer from '../Drawer';

interface IProps {
  dates: string[];
  user: UserModel;
  cities: CityModel[];
  onDateSelect: (dateId: string) => void;
  onCitySelect: (cityId: string) => void;
}

const TabletNavbar: React.FC<IProps> = ({ dates, user, cities, onDateSelect, onCitySelect }) => {
  const [drawerOpened, setDrawerOpened] = React.useState<boolean>(false);
  const eventIconRef = React.useRef<SVGSVGElement>(null);
  const chooseCityRef = React.useRef<SVGSVGElement>(null);

  const toggleDrawerOpen = () => {
    setDrawerOpened((opened) => !opened);
  };

  return (
    <header className={styles.navbar}>
      <Drawer isOpen={drawerOpened} onClose={toggleDrawerOpen} />
      <MenuIcon onClick={toggleDrawerOpen} />
      <div className={styles.logo}>
        <NavLink to={Routes.DEFAULT} custom-attribute="main-logo">
          <h1>music.ua</h1>
        </NavLink>
      </div>
      <>
        <EventIcon ref={eventIconRef}></EventIcon>
        <DatesMenu dates={dates} anchorEl={(eventIconRef.current as unknown) as HTMLElement} onSelect={onDateSelect} />
      </>

      <LocationCityIcon ref={chooseCityRef} />
      <CitiesDialog anchorEl={chooseCityRef.current} onSelect={onCitySelect} cities={cities} />
    </header>
  );
};

export default TabletNavbar;
