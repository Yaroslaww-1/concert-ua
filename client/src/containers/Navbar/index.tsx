import React from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { createSelector } from 'reselect';
import { RootState } from 'src/redux/rootReducer';
import { fetchCities } from './redux/actions';

import { NavbarState } from './redux/reducer';
import { ProfileUserState } from 'src/pages/Profile/containers/PersonalInfo/redux/reducer';
import DesktopNavbar from './components/DesktopNavbar';
import TabletNavbar from './components/TabletNavbar';
import { useIsDesktop } from 'src/common/hooks/media-hooks';

const navbarSelector = createSelector(
  (state: RootState) => state.navbar.state,
  (state: NavbarState) => ({
    cities: state.cities,
  }),
);

const userSelector = createSelector(
  (state: RootState) => state.profile.user.state,
  (state: ProfileUserState) => ({
    user: state.user,
  }),
);

const Navbar: React.FC = () => {
  const dispatch = useDispatch();
  const dates = ['Today', 'Tomorrow', 'This week', 'This weekend', 'This month'];
  const { cities } = useSelector(navbarSelector);
  const { user } = useSelector(userSelector);

  React.useEffect(() => {
    dispatch(fetchCities.request());
  }, []);

  const isDesktop = useIsDesktop();

  const onDateSelect = (id: string) => {
    console.log(`Selected date id in navbar: ${id}`);
  };

  const onCitySelect = (id: string) => {
    console.log(`Selected city id in navbar: ${id}`);
  };

  return (
    <>
      {isDesktop ? (
        <DesktopNavbar
          cities={cities}
          dates={dates}
          user={user!}
          onDateSelect={onDateSelect}
          onCitySelect={onCitySelect}
        />
      ) : (
        <TabletNavbar
          cities={cities}
          dates={dates}
          user={user!}
          onDateSelect={onDateSelect}
          onCitySelect={onCitySelect}
        />
      )}
    </>
  );
};

export default Navbar;
