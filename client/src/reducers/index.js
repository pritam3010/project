import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";

import authReducer from "./authReducer";
import projectReducer from "./projectReducer";

export default combineReducers({
    form: formReducer,
    auth: authReducer,
    projects: projectReducer
});
