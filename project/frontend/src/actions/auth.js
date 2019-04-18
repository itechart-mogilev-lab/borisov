import { SET_CURRENT_COMPANY, LOGOUT_CURRENT_COMPANY, SET_CURRENT_USER, LOGOUT_CURRENT_USER } from '../actions/types';

export const setCurrentCompany = decoded => {
    return {
        type: SET_CURRENT_COMPANY,
        payload: decoded
    }
}

export const logoutCurrentCompany = decoded => {
    return {
        type: LOGOUT_CURRENT_COMPANY,
        payload: decoded
    }
}

export const setCurrentUser = decoded => {
    return {
        type: SET_CURRENT_USER,
        payload: decoded
    }
}

export const logoutCurrentUser = decoded => {
    return {
        type: LOGOUT_CURRENT_USER,
        payload: decoded
    }
}