import React from 'react';
import {Route, IndexRoute} from 'react-router';
import App from './components/App';
import Home from './components/Home';
import Work from './containers/Work';
import About from './components/About';
import Contact from './components/Contact';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={Home} />
    <Route path="work" component={Work} />
    <Route path="about" component={About} />
    <Route path="contact" component={Contact} />
  </Route>
);