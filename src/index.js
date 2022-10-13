import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { Provider } from "react-redux";
import store from "./Redux/store";

import App from "./App";

const element = document.getElementById("root");

ReactDOM.render(
    <Provider store={store}>
        <App></App>
    </Provider>,
    element
);
