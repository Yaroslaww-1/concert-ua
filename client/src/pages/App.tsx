import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Routes } from '../common/enum/routes';
import HomePage from './Home';
import NotFoundPage from './NotFound';

const App: React.FC = () => {
  return (
    <>
      <Switch>
        <Route exact path={Routes.DEFAULT} component={HomePage} />
        <Route exact path={Routes.NOT_FOUND} component={NotFoundPage} />
      </Switch>
    </>
  );
};

export default App;
