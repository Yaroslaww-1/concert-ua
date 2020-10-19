import { combineReducers } from 'redux';
import navbarReducer from 'src/containers/Header/redux/reducer';
import profileReducer from 'src/pages/Profile/redux/reducer';

const RootReducer = combineReducers({
  profile: profileReducer,
  navbar: navbarReducer,
});

export default RootReducer;

export type RootState = ReturnType<typeof RootReducer>;
