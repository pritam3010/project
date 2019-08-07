import axios from "axios";
import history from "../history.js";
import axiosConfig from "../api/axios";

import {
    SIGN_UP,
    SIGN_IN,
    SIGN_OUT,
    GET_PROJECT,
    GET_PROJECTS,
    CREATE_PROJECT
} from "./type";

export const registerUser = formValues => async dispatch => {
    const response = await axios.put(
        "http://localhost:4000/account/register",
        formValues
    );
    dispatch({ type: SIGN_UP, payload: response.data });
    history.push("/login");
};

export const SignIn = formValues => async dispatch => {
    try {
        const response = await axios.post(
            "http://localhost:4000/account/login",
            formValues
        );
        localStorage.setItem("token", response.data.token);
        dispatch({ type: SIGN_IN, payload: response.data });
        history.push("/app/dashboard");
    } catch (err) {
        console.log(err);
    }
};

export const signOut = () => {
    localStorage.removeItem("token");
    return { type: SIGN_OUT };
};

export const createProject = newProject => async dispatch => {
    try {
        const response = await axiosConfig.post("/app/project", newProject);
        dispatch({ type: CREATE_PROJECT, payload: response.data });
    } catch (err) {
        console.log(err);
    }
};
export const getProjects = () => async dispatch => {
    const token = localStorage.getItem("token");
    const url = "http://localhost:4000/app/project";
    try {
        const response = await axios.get(url, {
            headers: { Authorization: `Bearer ${token}` }
        });
        dispatch({ type: GET_PROJECTS, payload: response.data });
    } catch (err) {
        console.log(err);
    }
};
export const getProject = id => async dispatch => {
    const response = await axiosConfig.get(`/app/project/${id}`);
    dispatch({ type: GET_PROJECT, payload: response.data });
};
