import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import { Router, browserHistory } from "react-router";
import routes from "./routes";
import configureStore from "./store/configureStore";
import { syncHistoryWithStore } from "react-router-redux";
import initialState from "./reducers/initialState";
import "./favicon.ico";
import "./styles/styles.scss";

const store = configureStore(initialState);

const history = syncHistoryWithStore(browserHistory, store);

render(
  <Provider store={store}>
    <Router history={history} routes={routes} />
  </Provider>,
  document.getElementById("app")
);
