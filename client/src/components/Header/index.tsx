import React from 'react';
import { NavLink } from 'react-router-dom';
import { Routes } from 'src/common/enum/routes';
import styles from './styles.module.scss';
import SearchIcon from '@material-ui/icons/Search';
import EventIcon from '@material-ui/icons/Event';
import LocationCityIcon from '@material-ui/icons/LocationCity';

interface IProps {
  profileNamePreview: string;
}

const HeaderComponent: React.FC<IProps> = ({ profileNamePreview }) => {
  return (
    <header className={styles.header}>
      <div className={styles.innerHeader}>
        <h1>music.ua</h1>
        <NavLink to={Routes.CONCERTS}>
          <h3>Concerts</h3>
        </NavLink>
        <NavLink to={Routes.BANDS}>
          <h3>Bands</h3>
        </NavLink>
        <NavLink to={Routes.ALBUMS}>
          <h3>Albums</h3>
        </NavLink>
        <SearchIcon />
        <EventIcon />
        <div className={styles.chooseCity}>
          <LocationCityIcon />
          <h3>Choose city</h3>
        </div>
        <div className={styles.profileIcon}>{profileNamePreview}</div>
      </div>
    </header>
  );
};

export default HeaderComponent;
