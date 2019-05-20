import React from "react";
import { connect } from "react-redux";

import LogInForm from "./LogInForm";
import { SignIn } from "../../actions";

const LogIn = props => {
  const onSubmit = formValues => {
    props.SignIn(formValues);
  };

  return <LogInForm onSubmit={onSubmit} />;
};

export default connect(
  null,
  { SignIn }
)(LogIn);
