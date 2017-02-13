import React from 'react';
import {Route, IndexRoute} from 'react-router';
import App from './components/App';
import Home from './components/Home';
import Work from './components/Work';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={Home} />
    <Route path="work" component={Work} />
  </Route>
);