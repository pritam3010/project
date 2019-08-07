import React from "react";
import { Field, reduxForm } from "redux-form";
import { Link as RouterLink } from "react-router-dom";
import {
    Container,
    TextField,
    Checkbox,
    CssBaseline,
    Typography,
    Grid,
    Button,
    Link,
    FormControlLabel
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => {
    return {
        paper: {
            marginTop: theme.spacing(14),
            display: "flex",
            flexDirection: "column",
            alignItems: "center"
        },
        form: {
            width: "100%",
            marginTop: theme.spacing(3)
        },
        submit: {
            margin: theme.spacing(3, 0, 2)
        }
    };
});

const renderTextField = ({ input, ...customs }) => (
    <TextField {...input} {...customs} />
);

const renderCheckbox = ({ input, label, ...customs }) => (
    <FormControlLabel
        control={
            <Checkbox
                checked={input.value ? true : false}
                onChange={input.onChange}
                {...customs}
            />
        }
        label={label}
    />
);

const SignUpForm = props => {
    const classes = useStyles();
    const onSubmit = formValues => {
        props.onSubmit(formValues);
    };

    return (
        <Container component="main" maxWidth="xs">
            <CssBaseline />
            <div className={classes.paper}>
                <Typography component="h1" variant="h5">
                    Sign Up
                </Typography>
                <form
                    className={classes.form}
                    onSubmit={props.handleSubmit(onSubmit)}
                >
                    <Grid container spacing={2}>
                        <Grid item xs={12} sm={6}>
                            <Field
                                name="firstName"
                                variant="outlined"
                                required
                                fullWidth
                                id="firstName"
                                label="First Name"
                                type="text"
                                autoFocus
                                component={renderTextField}
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <Field
                                name="lastName"
                                variant="outlined"
                                required
                                fullWidth
                                id="lastName"
                                label="Last Name"
                                type="text"
                                component={renderTextField}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <Field
                                name="email"
                                variant="outlined"
                                required
                                fullWidth
                                id="email"
                                label="Email Address"
                                component={renderTextField}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <Field
                                variant="outlined"
                                required
                                fullWidth
                                id="password"
                                name="password"
                                label="password"
                                type="password"
                                component={renderTextField}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <Field
                                name="emailUpdates"
                                color="primary"
                                label="I want to receive product offers, updates and news."
                                component={renderCheckbox}
                            />
                        </Grid>
                    </Grid>
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                        className={classes.submit}
                    >
                        Register
                    </Button>
                    <Grid container justify="flex-end">
                        <Grid item>
                            <Link
                                variant="body2"
                                component={RouterLink}
                                to="/login"
                            >
                                Already have an account? Sign in
                            </Link>
                        </Grid>
                    </Grid>
                </form>
            </div>
        </Container>
    );
};

export default reduxForm({ form: "signup" })(SignUpForm);
