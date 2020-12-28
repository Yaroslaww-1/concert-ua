import React from 'react';
import { Router } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import ReactDOM from 'react-dom';
import './styles/index.scss';
import App from 'src/pages/App';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux';
import store from 'src/redux/store';
import { ThemeProvider } from '@material-ui/core/styles';
import { theme } from 'src/assets/theme/theme';

console.log('RENDER');

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <Router history={createBrowserHistory()}>
          <App />
        </Router>
      </ThemeProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
