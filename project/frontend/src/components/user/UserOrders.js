import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

class UserOrders extends Component {

    componentDidMount() {

    }

    render() {
        return (
            <div>
                USER ACTIVE ORDERS
            </div>
        )              
    }
}

const mapStateToProps = (state) => ({

})

export default connect(mapStateToProps, {  })(withRouter(UserOrders));