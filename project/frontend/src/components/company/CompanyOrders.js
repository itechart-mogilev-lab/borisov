import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

class CompanyOrders extends Component {

    componentDidMount() {

    }

    render() {
        return (
            <div>
                COMPANY ACTIVE ORDERS
            </div>
        )              
    }
}

const mapStateToProps = (state) => ({
    
})

export default connect(mapStateToProps, {  })(withRouter(CompanyOrders));