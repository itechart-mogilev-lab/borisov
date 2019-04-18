import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { registerUser } from '../../api/user/authentication';
import classnames from 'classnames';
import { Link } from 'react-router-dom';

class RegisterUser extends Component {

    constructor() {
        super();
        this.state = {
            name: '',
            email: '',
            phone: '',
            password: '',
            password_confirm: '',
            errors: {}
        }
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleInputChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit(e) {
        e.preventDefault();
        const user = {
            name: this.state.name,
            email: this.state.email,
            phone: this.state.phone,
            password: this.state.password,
            password_confirm: this.state.password_confirm
        }
        this.props.registerUser(user, this.props.history);
    }

    static getDerivedStateFromProps(props, state) {
        if(props.auth.isAuthenticated) {
            props.history.push('/')
        }
        if(props.errors) {
            return {
                errors: props.errors
            };
        }
        return null;
    }

    render() {
        const { errors } = this.state;
        return(
        <div className="container text-center" style={{ marginTop: '50px', width: '400px'}}>
            <h2 style={{marginBottom: '40px'}}>User Registration</h2>
            <form onSubmit={ this.handleSubmit }>
                <div className="form-group">
                    <input
                    type="text"
                    placeholder="Name"
                    className={classnames('form-control form-control-lg', {
                        'is-invalid': errors.name
                    })}
                    name="name"
                    onChange={ this.handleInputChange }
                    value={ this.state.name }
                    />
                    {errors.name && (<div className="invalid-feedback">{errors.name}</div>)}
                </div>
                <div className="form-group">
                    <input
                    type="email"
                    placeholder="Email"
                    className={classnames('form-control form-control-lg', {
                        'is-invalid': errors.email
                    })}
                    name="email"
                    onChange={ this.handleInputChange }
                    value={ this.state.email }
                    />
                    {errors.email && (<div className="invalid-feedback">{errors.email}</div>)}
                </div>
                <div className="form-group">
                    <input
                    type="phone"
                    placeholder="Mobile Phone"
                    className={classnames('form-control form-control-lg', {
                        'is-invalid': errors.phone
                    })}
                    name="phone"
                    onChange={ this.handleInputChange }
                    value={ this.state.phone }
                    />
                    {errors.phone && (<div className="invalid-feedback">{errors.phone}</div>)}
                </div>
                <div className="form-group">
                    <input
                    type="password"
                    placeholder="Password"
                    className={classnames('form-control form-control-lg', {
                        'is-invalid': errors.password
                    })}
                    name="password"
                    onChange={ this.handleInputChange }
                    value={ this.state.password }
                    />
                    {errors.password && (<div className="invalid-feedback">{errors.password}</div>)}
                </div>
                <div className="form-group">
                    <input
                    type="password"
                    placeholder="Confirm Password"
                    className={classnames('form-control form-control-lg', {
                        'is-invalid': errors.password_confirm
                    })}
                    name="password_confirm"
                    onChange={ this.handleInputChange }
                    value={ this.state.password_confirm }
                    />
                    {errors.password_confirm && (<div className="invalid-feedback">{errors.password_confirm}</div>)}
                </div>
                <div className="form-group">
                    <button type="submit" className="btn btn-primary btn-lg">
                        Register User
                    </button>
                </div>
                <Link className="nav-link" to="/register/company">...or register as a company!</Link>
            </form>
        </div>
        )
    }
}

RegisterUser.propTypes = {
    registerUser: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    auth: state.auth,
    errors: state.errors
});

export default connect(mapStateToProps,{ registerUser })(withRouter(RegisterUser))