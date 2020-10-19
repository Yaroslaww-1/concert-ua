import React, { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { Routes } from 'src/common/enum/routes';

import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'src/redux/rootReducer';
import { fetchCities, fetchDates } from './redux/actions';

import styles from './styles.module.scss';
import EventIcon from '@material-ui/icons/Event';
import LocationCityIcon from '@material-ui/icons/LocationCity';
import ProfileIcon from './components/profile-icon';

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

  useEffect(() => {
    dispatch(fetchDates.request());
    dispatch(fetchCities.request());
  }, []);

  return (
    <header className={styles.header}>
      <div className={styles.innerHeader}>
        <h1>music.ua</h1>
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
        <EventIcon />
        <div className={styles.chooseCity}>
          <LocationCityIcon />
          <h3>Choose city</h3>
        </div>
        {user ? <ProfileIcon profileNamePreview={user.name.toUpperCase().charAt(0)} /> : <h3>Login</h3>}
      </div>
    </header>
  );
};

export default HeaderContainer;
