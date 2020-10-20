import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Routes } from '../common/enum/routes';
import HomePage from './Home';

const App: React.FC = () => {
  return (
    <>
      <Switch>
        <Route exact path={Routes.DEFAULT} component={HomePage} />
      </Switch>
    </>
  );
};

export default App;
