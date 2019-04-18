import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import {  } from 'reactstrap';
import UserProfile from './user/UserProfile';
import CompanyProfile from './company/CompanyProfile';

class Profile extends Component {

    render() {
        switch (this.props.auth.user.role) {
            case 'user':
                return (<UserProfile/>);
            case 'company':
                return (<CompanyProfile/>);
            default:
                return (<Link to="/login"><h2>Sign In to access this page!</h2></Link>);
        }      
    }
}
Profile.propTypes = {
    auth: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
    auth: state.auth
})

export default connect(mapStateToProps, {  })(withRouter(Profile));