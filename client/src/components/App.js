import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Container from "react-bootstrap/Container";

import Header from "./pages/Header";
import Home from "./pages/Home";
import SignUp from "./pages/SignUp";
import LogIn from "./pages/LogIn";

const App = () => {
  return (
    <Router>
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
