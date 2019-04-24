import axios from 'axios';
import { setUserProfile } from '../../actions/profile'
import { getErrors } from '../../actions/errors'


export const getUserProfile = () => dispatch => {
    axios.get('/api/users/profile')
    .then(res => {
        dispatch(setUserProfile(res.data));
    })
    .catch(err => {
        dispatch(getErrors(err));
    });
}

export const updateUserProfile = (user, history) => dispatch => {
    axios.post('/api/users/register', user)
            .then(res => history.push('/profile'))
            .catch(err => {
                dispatch(getErrors(err));
            });
}

