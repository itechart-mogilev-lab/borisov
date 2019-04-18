import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';
import jwt_decode from 'jwt-decode';
import setAuthToken from './setAuthToken';
import { setCurrentUser } from './actions/auth';
import { logoutUser } from './api/user/authentication';

import MainNavBar from './components/MainNavBar';
import RegisterUser from './components/user/RegisterUser';
import RegisterCompany from './components/company/RegisterCompany';
import Login from './components/Login';
import Home from './components/Home';
import Profile from './components/Profile';
import Orders from './components/Orders';
import History from './components/History';

if(localStorage.jwtToken) {
  setAuthToken(localStorage.jwtToken);
  const decoded = jwt_decode(localStorage.jwtToken);
  store.dispatch(setCurrentUser(decoded));

  const currentTime = Date.now() / 1000;
  if(decoded.exp < currentTime) {
    store.dispatch(logoutUser());
    window.location.href = '/login'
  }
}

class App extends Component {
  render() {
    return (
      <Provider store = { store }>
        <Router>
            <div>
              <MainNavBar />
                <Route exact path="/" component={ Home } />
                <div className="container">
                  <Route exact path="/register/user" component={ RegisterUser } />
                  <Route exact path="/register/company" component={ RegisterCompany } />
                  <Route exact path="/login" component={ Login } />
                  <Route exact path="/profile" component={ Profile } />
                  <Route exact path="/orders" component={ Orders } />
                  <Route exact path="/history" component={ History } />
                </div>
            </div>
          </Router>
        </Provider>
    );
  }
}

export default App;
