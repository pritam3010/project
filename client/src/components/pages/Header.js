import React from "react";
import { Link } from "react-router-dom";
import { Navbar, Container, Button as Btn } from "react-bootstrap";
import Paper from "@material-ui/core/Paper";
const Header = () => {
  return (
    <Paper square>
      <Navbar bg="light" variant="light">
        <Container>
          <Link to="/">
            <Navbar.Brand>Home</Navbar.Brand>
          </Link>
          <Link to="/login" className="ml-auto">
            <Btn variant="light">Login</Btn>
          </Link>
          <Link to="/register" className="ml-2">
            <Btn variant="outline-primary">Sign Up It's Free!</Btn>
          </Link>
        </Container>
      </Navbar>
    </Paper>
  );
};
export default Header;
