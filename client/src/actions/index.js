import history from "../history.js";

import { SIGN_UP, SIGN_IN } from "./type";

export const registerUser = formValues => async dispatch => {
  console.log(formValues);
  const response = await fetch("http://localhost:4000/account/signup", {
    method: "PUT",
    headers: {
      "Content-Type": "applicaiton/json"
    },
    body: JSON.stringify(formValues)
  });
  dispatch({ type: SIGN_UP, payload: response.data });
  history.push("/login");
};

export const SignIn = formValues => async dispatch => {
  console.log(formValues);
  const response = await fetch("http://localhost:4000/account/signin", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(formValues)
  });
  dispatch({ type: SIGN_IN, payload: response.data });
  history.push("/dashboard");
};
