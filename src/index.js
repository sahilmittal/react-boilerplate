import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { ConnectedRouter } from "connected-react-router";
import configureStore, { history } from "./store";
import App from "./containers/app";

import "./styles/common.scss";
import 'normalize.css'

const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <div>
        <App />
      </div>
    </ConnectedRouter>
  </Provider>,
  document.getElementById("root")
);
