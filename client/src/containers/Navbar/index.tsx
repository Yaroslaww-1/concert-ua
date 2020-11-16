import React from 'react';
import { NavLink } from 'react-router-dom';
import { Routes } from 'src/common/enum/routes';

import { useDispatch, useSelector } from 'react-redux';
import { createSelector } from 'reselect';
import { RootState } from 'src/redux/rootReducer';
import { fetchCities, fetchDates } from './redux/actions';

import styles from './styles.module.scss';
import EventIcon from '@material-ui/icons/Event';
import LocationCityIcon from '@material-ui/icons/LocationCity';
import ProfileIcon from './components/ProfileIcon';
import DatesMenu from './components/DatesMenu';
import CitiesDialog from './components/CitiesDialog';
import { NavbarState } from './redux/reducer';
import { ProfileState } from 'src/pages/Profile/redux/reducer';

const navbarSelector = createSelector(
  (state: RootState) => state.navbar.state,
  (state: NavbarState) => ({
    dates: state.dates,
    cities: state.cities,
  }),
);

const userSelector = createSelector(
  (state: RootState) => state.profile.state,
  (state: ProfileState) => ({
    user: state.user,
  }),
);

const Navbar: React.FC = () => {
  const dispatch = useDispatch();
  const { dates, cities } = useSelector(navbarSelector);
  const { user } = useSelector(userSelector);
  const eventIconRef = React.useRef<SVGSVGElement>(null);
  const chooseCityRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    dispatch(fetchDates.request());
    dispatch(fetchCities.request());
  }, []);

  const onDateSelect = (id: string) => {
    console.log(`Selected date id in navbar: ${id}`);
  };

  const onCitySelect = (id: string) => {
    console.log(`Selected city id in navbar: ${id}`);
  };

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
          <ProfileIcon profileNamePreview={user.name.toUpperCase().charAt(0)} />
        ) : (
          <div className={styles.loginButton}>Login</div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
