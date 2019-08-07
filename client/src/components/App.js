import React, { Component } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import decoder from "jwt-decode";

import Home from "./pages/Home";
import Dashboard from "./core/dashboard";
import Project from "./core/project";
import Task from "./core/task";

function checkAuth() {
    const token = localStorage.getItem("token");
    if (!token) {
        return false;
    }
    try {
        const { exp } = decoder(token);
        if (exp < new Date().getTime() / 1000) {
            return false;
        }
    } catch (err) {
        console.log(err);
        return false;
    }
    return true;
}

function AuthRoute(p) {
    const { render: Render, ...rest } = p;
    return (
        <Route
            {...rest}
            render={props =>
                checkAuth() ? (
                    <Render {...props} />
                ) : (
                    <Redirect to={{ pathname: "/login" }} />
                )
            }
        />
    );
}

class App extends Component {
    render() {
        return (
            <Switch>
                <AuthRoute
                    path="/app/dashboard"
                    exact
                    render={routeProps => <Dashboard {...routeProps} />}
                />
                <AuthRoute
                    path="/app/project/:projectId"
                    exact
                    render={routeProps => <Project {...routeProps} />}
                />
                <Route
                    path="/app/task/:taskId"
                    exact
                    render={routeProps => <Task {...routeProps} />}
                />

                <Home />
            </Switch>
        );
    }
}

export default App;
