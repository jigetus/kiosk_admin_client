import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import "./styles/index.scss";
import { Provider } from "react-redux";
import configureStore from "./redux/store";

const store = configureStore();

const RenderApp = () => (
  <Provider store={store}>
    <App />
  </Provider>
);

ReactDOM.render(<RenderApp />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
