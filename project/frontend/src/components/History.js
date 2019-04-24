import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import {  } from 'reactstrap';
import UserHistory from './user/UserHistory';
import CompanyHistory from './company/CompanyHistory';

class History extends Component {

    render() {
        switch (this.props.auth.user.role) {
            case 'user':
                return (<UserHistory/>);
            case 'company':
                return (<CompanyHistory/>);
            default:
                return (<Link to="/login"><h2>Sign In to access this page!</h2></Link>);
        }      
    }
}
History.propTypes = {
    auth: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
    auth: state.auth
})

export default connect(mapStateToProps, {  })(withRouter(History));