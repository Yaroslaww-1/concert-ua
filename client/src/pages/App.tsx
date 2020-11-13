import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Routes } from '../common/enum/routes';
import HomePage from './Home';
import NotFoundPage from './NotFound';
import Concerts from './Concerts';

const App: React.FC = () => {
  return (
    <>
      <Switch>
        <Route exact path={Routes.DEFAULT} component={HomePage} />
        <Route exact path={Routes.CONCERTS} component={Concerts} />
        <Route exact path={Routes.NOT_FOUND} component={NotFoundPage} />
      </Switch>
    </>
  );
};

export default App;
