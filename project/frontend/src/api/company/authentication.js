import axios from 'axios';
import setAuthToken from '../../setAuthToken';
import jwt_decode from 'jwt-decode';
import { setCurrentCompany, logoutCurrentCompany } from '../../actions/auth'
import { getErrors } from '../../actions/errors'

export const registerCompany = (company, history) => dispatch => {
    axios.post('/api/companys/register', company)
            .then(res => history.push('/login'))
            .catch(err => {
                dispatch(getErrors(err));
            });
}

export const loginCompany = (user) => dispatch => {
    axios.post('/api/companys/login', user)
            .then(res => {
                const { token } = res.data;
                localStorage.setItem('jwtToken', token);
                setAuthToken(token);
                const decoded = jwt_decode(token);
                dispatch(setCurrentCompany(decoded));
            })
            .catch(err => {
                dispatch(getErrors(err));
            });
}

export const logoutCompany = (history) => dispatch => {
    localStorage.removeItem('jwtToken');
    setAuthToken(false);
    dispatch(logoutCurrentCompany({}));
    history.push('/login');
}