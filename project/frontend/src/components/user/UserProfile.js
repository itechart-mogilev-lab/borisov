import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { getUserProfile, updateUserProfile } from '../../api/user/profile';
import {  } from 'reactstrap';

class UserProfile extends Component {

    componentDidMount() {
        this.props.getUserProfile();
    }

    render() {
        return (
            <div>
                <p>ID: {this.props.profile.user.id}</p>
                <p>Role: {this.props.profile.user.role}</p>
                <p>Active: {this.props.profile.user.isActive}</p>
                <p>Name: {this.props.profile.user.name}</p>
                <p>Email: {this.props.profile.user.email}</p>
                <p>Phone: {this.props.profile.user.phone}</p>
                <p>Register date: {this.props.profile.user.date}</p>
            </div>
        )              
    }
}

UserProfile.propTypes = {
    auth: PropTypes.object.isRequired,
    getUserProfile: PropTypes.func.isRequired,
    updateUserProfile: PropTypes.func.isRequired
}

const mapStateToProps = (state) => ({
    auth: state.auth,
    profile: state.profile
})

export default connect(mapStateToProps, { getUserProfile, updateUserProfile })(withRouter(UserProfile));