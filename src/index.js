import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import { Router, Route, hashHistory } from "react-router";
import App from "./components/App";

import configureStore from "./store/configureStore";

import "./styles/main.scss";

const store = configureStore();

class ProviderWrapper extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <App />
      </Provider>
    );
  }
}

render(
  <Router history={hashHistory}>
    <Route path="/" component={ProviderWrapper}></Route>
  </Router>,
  document.getElementById("app")
);
