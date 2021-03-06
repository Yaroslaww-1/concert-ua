import { combineReducers } from 'redux';
import navbarReducer from 'src/containers/Navbar/redux/reducer';
import eventReducer from 'src/pages/Event/redux/reducer';
import concertsReducer from 'src/pages/Concerts/redux/reducer';
import homeReducer from 'src/pages/Home/redux/reducer';
import profileReducer from 'src/pages/Profile/redux/reducer';
import artistReducer from 'src/pages/Artist/redux/reducer';
import artistsReducer from 'src/pages/Artists/redux/reducer';

const RootReducer = combineReducers({
  profile: profileReducer,
  navbar: navbarReducer,
  home: homeReducer,
  concerts: concertsReducer,
  event: eventReducer,
  artist: artistReducer,
  artists: artistsReducer,
});

export default RootReducer;

export type RootState = ReturnType<typeof RootReducer>;
