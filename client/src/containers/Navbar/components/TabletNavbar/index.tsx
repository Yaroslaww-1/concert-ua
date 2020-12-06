import React from 'react';
import { NavLink } from 'react-router-dom';
import { Routes } from 'src/common/enum/routes';

import { DateModel } from 'src/api/models/date.model';
import { UserModel } from 'src/api/models/user.model';

import styles from './styles.module.scss';
import EventIcon from '@material-ui/icons/Event';
import LocationCityIcon from '@material-ui/icons/LocationCity';
import DatesMenu from '../DatesMenu';
import CitiesDialog from '../CitiesDialog';
import { CityModel } from 'src/api/models/city.model';
import MenuIcon from '@material-ui/icons/Menu';

interface IProps {
  dates: DateModel[];
  user: UserModel;
  cities: CityModel[];
  onDateSelect: (dateId: string) => void;
  onCitySelect: (cityId: string) => void;
}

const TabletNavbar: React.FC<IProps> = ({ dates, user, cities, onDateSelect, onCitySelect }) => {
  const eventIconRef = React.useRef<SVGSVGElement>(null);
  const chooseCityRef = React.useRef<SVGSVGElement>(null);

  return (
    <header className={styles.navbar}>
      <MenuIcon />
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
