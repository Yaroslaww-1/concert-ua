import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Routes } from '../common/enum/routes';
import HomePage from './Home';
import NotFoundPage from './NotFound';
import Concerts from './Concerts';
import Event from './Event';
import Artist from './Artist';
import Artists from './Artists';
import LoginPage from './LoginRegister/login-page';
import RegisterPage from './LoginRegister/register-page';

const App: React.FC = () => {
  return (
    <Switch>
      <Route exact path={Routes.DEFAULT} component={HomePage} />
      <Route exact path={Routes.CONCERTS} component={Concerts} />
      <Route path={Routes.EVENT} component={Event} />
      <Route path={Routes.ARTIST} component={Artist} />
      <Route path={Routes.BANDS} component={Artists} />
      <Route path={Routes.LOGIN} component={LoginPage} />
      <Route path={Routes.REGISTER} component={RegisterPage} />
      <Route exact path={Routes.NOT_FOUND} component={NotFoundPage} />
    </Switch>
  );
};

export default App;
