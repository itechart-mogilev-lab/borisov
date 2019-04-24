import { SET_USER_PROFILE } from '../actions/types';

const initialState = {
    user: {}
}

export default function(state = initialState, action ) {
    switch(action.type) {
        case SET_USER_PROFILE:
            return {
                ...state,
                user: action.payload
            }
        default: 
            return state;
    }
}