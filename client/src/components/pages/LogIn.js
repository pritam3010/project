import React from "react";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";

const useStyle = makeStyles(theme => ({
  root: {
    color: "red"
  },
  button: {
    margin: theme.spacing(3, 0, 2)
  }
}));
const LogIn = () => {
  const classes = useStyle();
  return (
    <Container component="main" maxWidth="xs">
      <div>
        <h1 style={{ textAlign: "center" }}>Welcome to Log In page</h1>
        <form style={{ maxWidth: "400px", margin: "auto" }}>
          {/* <TextField
            type="text"
            required
            id="first-name"
            label="First Name"
            margin="normal"
            variant="outlined"
            autoFocus
          />
          <TextField
            type="text"
            required
            id="last-name"
            label="Last Name"
            value=""
            margin="normal"
            variant="outlined"
          />
          <br /> */}
          <TextField
            type="email"
            required
            id="email"
            label="Email"
            value=""
            margin="normal"
            variant="outlined"
            fullWidth
            autoComplete="email"
          />
          <TextField
            type="password"
            required
            id="password"
            label="Password"
            value=""
            margin="normal"
            variant="outlined"
            fullWidth
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.button}
          >
            Login
          </Button>
        </form>
      </div>
    </Container>
  );
};

export default LogIn;
