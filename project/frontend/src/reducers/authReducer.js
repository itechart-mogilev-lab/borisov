import { SET_CURRENT_USER, LOGOUT_CURRENT_USER, SET_CURRENT_COMPANY, LOGOUT_CURRENT_COMPANY } from '../actions/types';
import isEmpty from '../validation/is-empty';

const initialState = {
    isAuthenticated: false,
    user: {}
}

export default function(state = initialState, action ) {
    switch(action.type) {
        case SET_CURRENT_COMPANY:
        case SET_CURRENT_USER:
        case LOGOUT_CURRENT_COMPANY:
        case LOGOUT_CURRENT_USER:
            return {
                ...state,
                isAuthenticated: !isEmpty(action.payload),
                user: action.payload
            }
        default: 
            return state;
    }
}