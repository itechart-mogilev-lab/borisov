import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import {  } from 'reactstrap';

class CompanyProfile extends Component {

    render() {
        return (
            <div>CompanyProfile</div>
        )                
    }
}
CompanyProfile.propTypes = {
    auth: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
    auth: state.auth
})

export default connect(mapStateToProps, {  })(withRouter(CompanyProfile));