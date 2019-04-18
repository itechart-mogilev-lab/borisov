import axios from 'axios';
import setAuthToken from '../../setAuthToken';
import jwt_decode from 'jwt-decode';
import { setCurrentUser, logoutCurrentUser } from '../../actions/auth'
import { getErrors } from '../../actions/errors'

export const registerUser = (user, history) => dispatch => {
    axios.post('/api/users/register', user)
            .then(res => history.push('/login'))
            .catch(err => {
                dispatch(getErrors(err));
            });
}

export const loginUser = (user) => dispatch => {
    axios.post('/api/users/login', user)
            .then(res => {
                const { token } = res.data;
                localStorage.setItem('jwtToken', token);
                setAuthToken(token);
                const decoded = jwt_decode(token);
                dispatch(setCurrentUser(decoded));
            })
            .catch(err => {
                dispatch(getErrors(err));
            });
}

export const logoutUser = (history) => dispatch => {
    localStorage.removeItem('jwtToken');
    setAuthToken(false);
    dispatch(logoutCurrentUser({}));
    history.push('/login');
}
