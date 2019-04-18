import { GET_ERRORS } from '../actions/types';

export const getErrors = err => {
    return {
        type: GET_ERRORS,
        payload: err.response.data
    }
}
