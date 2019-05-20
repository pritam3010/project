import React from "react";
import { Field, reduxForm } from "redux-form";
import { Link as routerLink } from "react-router-dom/";
import Container from "@material-ui/core/Container";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typograhpy from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import Link from "@material-ui/core/Link";
import makeStyles from "@material-ui/core/styles/makeStyles";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";

const useStyles = makeStyles(theme => ({
  formBox: {
    marginTop: theme.spacing(14),
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  },
  form: {
    width: "100%",
    marginTop: theme.spacing(1)
  },
  submit: {
    margin: theme.spacing(3, 0, 2)
  }
}));

const renderTextField = ({ input, ...customs }) => (
  <TextField {...input} {...customs} />
);
const renderCheckBox = ({ input, label, ...customs }) => (
  <FormControlLabel
    control={
      <Checkbox
        {...customs}
        checked={input.value ? true : false}
        onChange={input.onChange}
      />
    }
    label={label}
  />
);

const LogInForm = props => {
  const classes = useStyles();
  const { handleSubmit } = props;
  const onSubmit = formValues => {
    console.log(formValues);
    props.onSubmit(formValues);
  };

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.formBox}>
        <Typograhpy component="h1" variant="h5">
          Log In
        </Typograhpy>
        <form className={classes.form} onSubmit={handleSubmit(onSubmit)}>
          <Field
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            name="email"
            label="Email"
            placeholder="Enter your email"
            type="email"
            autoFocus
            component={renderTextField}
          />
          <Field
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="password"
            name="password"
            label="Password"
            placeholder="Enter your password"
            type="password"
            component={renderTextField}
          />
          <Field
            name="remember"
            label="Remember me"
            color="primary"
            component={renderCheckBox}
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Continue to dashboard
          </Button>
          <Grid container>
            <Grid item xs>
              <Link variant="body2" component={routerLink} to="/login">
                Forgot password?
              </Link>
            </Grid>
            <Grid item>
              <Link variant="body2" component={routerLink} to="/register">
                {"Don't have an account? Sign Up"}
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
    </Container>
  );
};

export default reduxForm({ form: "login" })(LogInForm);
