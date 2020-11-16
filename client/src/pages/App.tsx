import React from 'react';
import { Route, HashRouter } from 'react-router-dom';
import { Routes } from '../common/enum/routes';
import HomePage from './Home';
import NotFoundPage from './NotFound';
import Concerts from './Concerts';
import Event from './Event';

const App: React.FC = () => {
  return (
    <>
      <HashRouter basename={process.env.PUBLIC_URL}>
        <Route exact path={Routes.DEFAULT} component={HomePage} />
        <Route exact path={Routes.CONCERTS} component={Concerts} />
        <Route path={Routes.EVENT} component={Event} />
        <Route exact path={Routes.NOT_FOUND} component={NotFoundPage} />
      </HashRouter>
    </>
  );
};

export default App;
