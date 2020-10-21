import { combineReducers } from 'redux';
import navbarReducer from 'src/containers/Navbar/redux/reducer';
import homeReducer from 'src/pages/Home/redux/reducer';
import profileReducer from 'src/pages/Profile/redux/reducer';

const RootReducer = combineReducers({
  profile: profileReducer,
  navbar: navbarReducer,
  home: homeReducer,
});

export default RootReducer;

export type RootState = ReturnType<typeof RootReducer>;
