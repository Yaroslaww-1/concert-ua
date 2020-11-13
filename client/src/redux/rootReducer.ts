import { combineReducers } from 'redux';
import navbarReducer from 'src/containers/Navbar/redux/reducer';
import concertsReducer from 'src/pages/Concerts/redux/reducer';
import homeReducer from 'src/pages/Home/redux/reducer';
import profileReducer from 'src/pages/Profile/redux/reducer';

const RootReducer = combineReducers({
  profile: profileReducer,
  navbar: navbarReducer,
  home: homeReducer,
  concerts: concertsReducer,
});

export default RootReducer;

export type RootState = ReturnType<typeof RootReducer>;
