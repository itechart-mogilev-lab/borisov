import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { logoutUser } from '../api/user/authentication';
import { logoutCompany } from '../api/company/authentication';
import { withRouter } from 'react-router-dom';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';

class MainNavBar extends Component {
    constructor(props) {
        super(props);
        this.toggle = this.toggle.bind(this);
        this.state = {
          isOpen: false
        };
    }

    toggle() {
        this.setState({
          isOpen: !this.state.isOpen
        });
    }

    onLogout(e) {
        e.preventDefault();
        switch (this.props.auth.user.role) {
            case 'user': {
                this.props.logoutUser(this.props.history)
                break; 
            }
            case 'company': {
                this.props.logoutCompany(this.props.history)
                break; 
            }
            default:
                break;
        }
    }

    render() {
        const {isAuthenticated, user} = this.props.auth;
        const authLinks = (
            <Nav className="ml-auto" navbar>
                <NavItem>
                    <NavLink tag={Link} to="/profile">
                        <img src={user.avatar} alt={user.name} title={user.name}
                        className="rounded-circle"
                        style={{ width: '25px', marginRight: '5px', marginLeft: '5px'}} />
                        Profile
                    </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink tag={Link} to="/orders">
                        Orders
                    </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink tag={Link} to="/history">
                        History
                    </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink tag={Link} to="/" onClick={this.onLogout.bind(this)}>
                        Logout
                    </NavLink>
                </NavItem>
            </Nav>
        )
      const guestLinks = (
        <Nav className="ml-auto" navbar>
            <NavItem>
                <NavLink tag={Link} to="/login">
                    Sign In
                </NavLink>
            </NavItem>
            <NavItem>
                <NavLink tag={Link} to="/register/user">
                    Sign Up
                </NavLink>
            </NavItem>
        </Nav>
      )
        return(
            <Navbar color="dark" dark expand="md">
                <NavbarBrand href="/">YourClean</NavbarBrand>
                <NavbarToggler onClick={this.toggle} />
                <Collapse isOpen={this.state.isOpen} navbar>
                    {isAuthenticated ? authLinks : guestLinks}
                </Collapse>
            </Navbar>
        )
    }
}
MainNavBar.propTypes = {
    logoutUser: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
    auth: state.auth
})

export default connect(mapStateToProps, { logoutUser, logoutCompany })(withRouter(MainNavBar));