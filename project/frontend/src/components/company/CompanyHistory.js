import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

class CompanyHistory extends Component {

    componentDidMount() {

    }

    render() {
        return (
            <div>
                COMPANY HISTORY
            </div>
        )              
    }
}

const mapStateToProps = (state) => ({

})

export default connect(mapStateToProps, {  })(withRouter(CompanyHistory));