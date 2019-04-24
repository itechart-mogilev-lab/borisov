import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import {  } from 'reactstrap';
import UserOrders from './user/UserOrders';
import CompanyOrders from './company/CompanyOrders';

class Orders extends Component {

    render() {
        switch (this.props.auth.user.role) {
            case 'user':
                return (<UserOrders/>);
            case 'company':
                return (<CompanyOrders/>);
            default:
                return (<Link to="/login"><h2>Sign In to access this page!</h2></Link>);
        }      
    }
}
Orders.propTypes = {
    auth: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
    auth: state.auth
})

export default connect(mapStateToProps, {  })(withRouter(Orders));