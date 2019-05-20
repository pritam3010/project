import React from "react";
import { connect } from "react-redux";

import SignUpForm from "./SignUpForm";
import { registerUser } from "../../actions";

const SignUp = props => {
  const onSubmit = formValues => {
    props.registerUser(formValues);
  };
  return <SignUpForm onSubmit={onSubmit} />;
};

export default connect(
  null,
  { registerUser }
)(SignUp);
