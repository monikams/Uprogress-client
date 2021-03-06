import React from 'react';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import App from 'App.js';
import Dashboard from 'dashboard/Dashboard';
import Directions from 'routes/Directions';

import { Provider } from 'react-redux';
import store from './store';

export default (
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={App}>
        <IndexRoute component={Dashboard} />
        {Directions}
      </Route>
    </Router>
  </Provider>
);
