import { CREATE_PROJECT, GET_PROJECTS } from "../actions/type";
export default (state = {}, action) => {
    switch (action.type) {
        case CREATE_PROJECT: {
            console.log(action.payload);
            return {
                ...state,
                projects: [...state.projects, action.payload.project]
            };
        }

        case GET_PROJECTS:
            return {
                ...state,
                projects: action.payload.projects,
                message: action.payload.message
            };
        default:
            return state;
    }
};
