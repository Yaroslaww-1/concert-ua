import React from 'react';
import { NavLink } from 'react-router-dom';
import { Routes } from 'src/common/enum/routes';

import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'src/redux/rootReducer';
import { fetchCities, fetchDates } from './redux/actions';

import styles from './styles.module.scss';
import EventIcon from '@material-ui/icons/Event';
import LocationCityIcon from '@material-ui/icons/LocationCity';
import ProfileIcon from './components/ProfileIcon';
import DatesMenu from './components/DatesMenu';
import CitiesDialog from './components/CitiesDialog';

interface IProps {
  profileNamePreview: string;
}

const HeaderContainer: React.FC<IProps> = ({ profileNamePreview }) => {
  const dispatch = useDispatch();
  const {
    navbar: {
      state: { dates, cities },
    },
    profile: {
      state: { user },
    },
  } = useSelector((state: RootState) => ({ navbar: state.navbar, profile: state.profile }));
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
    <header className={styles.header}>
      <div className={styles.innerHeader}>
        <NavLink to={Routes.DEFAULT} custom-attribute="main-logo">
          <h1>music.ua</h1>
        </NavLink>
        <div className={styles.break}></div>
        <NavLink to={Routes.CONCERTS}>
          <h3>Concerts</h3>
        </NavLink>
        <NavLink to={Routes.BANDS}>
          <h3>Bands</h3>
        </NavLink>
        <NavLink to={Routes.ALBUMS}>
          <h3>Albums</h3>
        </NavLink>
        <div className={styles.break}></div>
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
          <h3>Choose city</h3>
          <CitiesDialog anchorEl={chooseCityRef.current} onSelect={onCitySelect} cities={cities} />
        </div>
        {user ? <ProfileIcon profileNamePreview={user.name.toUpperCase().charAt(0)} /> : <h3>Login</h3>}
      </div>
    </header>
  );
};

export default HeaderContainer;
