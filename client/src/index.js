import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import { Router, Route } from "react-router-dom";

import ThemeProvider from "@material-ui/styles/ThemeProvider";
import { createMuiTheme } from "@material-ui/core/styles";
// import purple from "@material-ui/core/colors/purple";
import green from "@material-ui/core/colors/lightBlue";

import App from "./components/App";
import reducers from "./reducers";
import history from "./history";

const theme = createMuiTheme({
    palette: {
        primary: {
            main: "#007bff"
        },
        secondary: green
    },
    status: {
        danger: "pink"
    }
});

const composeEnhancers =
    typeof window === "object" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
        ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
        : compose;
const enhancer = composeEnhancers(applyMiddleware(thunk));
const store = createStore(reducers, enhancer);

ReactDOM.render(
    <Provider store={store}>
        <ThemeProvider theme={theme}>
            <Router history={history}>
                <Route component={App} />
            </Router>
        </ThemeProvider>
    </Provider>,
    document.getElementById("root")
);
