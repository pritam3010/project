import { SIGN_IN, SIGN_OUT } from "../actions/type";
const INITIAL_STATE = {
    isSignedIn: null
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case SIGN_IN: {
            console.log(action.payload);
            return { ...state, isSignedIn: true, user: action.payload.user };
        }
        case SIGN_OUT:
            return { ...state, isSignedIn: false, user: null };
        default:
            return state;
    }
};
