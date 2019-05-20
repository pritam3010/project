import React from "react";
import { Router, Route, Switch } from "react-router-dom";

// import Container from "react-bootstrap/Container";
import history from "../history";
import Header from "./pages/Header";
import Home from "./pages/Home";
import SignUp from "./pages/SignUp";
import LogIn from "./pages/LogIn";

const App = () => {
  return (
    <Router history={history}>
      <Header />
      {/* <Container maxWidth="sm"> */}
      <Switch>
        <Route path="/" exact component={Home} />>
        <Route path="/login" exact component={LogIn} />
        <Route path="/register" exact component={SignUp} />
      </Switch>
      {/* </Container> */}
    </Router>
  );
};

export default App;
