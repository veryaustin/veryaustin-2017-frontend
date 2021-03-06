import React from "react";
import { Route, IndexRoute } from "react-router";
import App from "./components/App";
import Home from "./containers/Home";
import Work from "./containers/Work";
import About from "./containers/About";
import Contact from "./containers/Contact";

export default (
  <Route path="/" component={App}>
    <IndexRoute path="home" component={Home} />
    <Route path="work" component={Work} />
    <Route path="about" component={About} />
    <Route path="contact" component={Contact} />
  </Route>
);
