import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

class UserHistory extends Component {

    componentDidMount() {

    }

    render() {
        return (
            <div>
                USER HISTORY
            </div>
        )              
    }
}

const mapStateToProps = (state) => ({

})

export default connect(mapStateToProps, {  })(withRouter(UserHistory));