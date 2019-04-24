import { SET_USER_PROFILE } from '../actions/types';

export const setUserProfile = data => {
    return {
        type: SET_USER_PROFILE,
        payload: data
    }
}