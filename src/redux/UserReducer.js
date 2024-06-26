import { LOGIN_USER, LOGOUT_USER } from './UserActions.js';

const initialState = {
    user: null
};

const UserReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOGIN_USER:
            return {
                ...state,
                user: action.payload
            };
        case LOGOUT_USER:
            return {
                ...state,
                user: null
            };
        default:
            return state;
    }
};

export default UserReducer;
