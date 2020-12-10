import React from 'react';
import { NavLink } from 'react-router-dom';
import { Routes } from 'src/common/enum/routes';

import { UserModel } from 'src/api/models/user.model';

import styles from './styles.module.scss';
import EventIcon from '@material-ui/icons/Event';
import LocationCityIcon from '@material-ui/icons/LocationCity';
import ProfileIcon from '../ProfileIcon';
import DatesMenu from '../DatesMenu';
import CitiesDialog from '../CitiesDialog';
import { CityModel } from 'src/api/models/city.model';

interface IProps {
  dates: string[];
  user: UserModel;
  cities: CityModel[];
  onDateSelect: (dateId: string) => void;
  onCitySelect: (cityId: string) => void;
}

const DesktopNavbar: React.FC<IProps> = ({ dates, user, cities, onDateSelect, onCitySelect }) => {
  const eventIconRef = React.useRef<SVGSVGElement>(null);
  const chooseCityRef = React.useRef<HTMLDivElement>(null);

  return (
    <header className={styles.navbar}>
      <div className={styles.innerNavbar}>
        <NavLink to={Routes.DEFAULT} custom-attribute="main-logo">
          <h1>music.ua</h1>
        </NavLink>
        <div className={styles.links}>
          <NavLink to={Routes.CONCERTS}>Concerts</NavLink>
          <NavLink to={Routes.BANDS}>Bands</NavLink>
          <NavLink to={Routes.ALBUMS}>Albums</NavLink>
        </div>

        <>
          <EventIcon ref={eventIconRef}></EventIcon>
          <DatesMenu
            dates={dates}
            anchorEl={(eventIconRef.current as unknown) as HTMLElement}
            onSelect={onDateSelect}
          />
        </>

        <div className={styles.chooseCity} ref={chooseCityRef}>
          <LocationCityIcon />
          Choose city
          <CitiesDialog anchorEl={chooseCityRef.current} onSelect={onCitySelect} cities={cities} />
        </div>
        {user ? (
          <ProfileIcon profileNamePreview={user.firstName.toUpperCase().charAt(0)} />
        ) : (
          <div className={styles.loginButton}>Login</div>
        )}
      </div>
    </header>
  );
};

export default DesktopNavbar;
