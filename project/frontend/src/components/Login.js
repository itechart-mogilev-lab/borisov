import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { loginUser } from '../api/user/authentication';
import { loginCompany } from '../api/company/authentication';
import classnames from 'classnames';
import { FormGroup, Label, Input } from 'reactstrap';


class Login extends Component {

    constructor() {
        super();
        this.state = {
            email_or_phone: '',
            password: '',
            selectedOption: 'loginUser',
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
            email_or_phone: this.state.email_or_phone,
            password: this.state.password,
        }
        if (this.state.selectedOption === "loginUser") {
            this.props.loginUser(user);
        }
        if (this.state.selectedOption === "loginCompany") {
            this.props.loginCompany(user);
        }
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
        const {errors} = this.state;
        return(
        <div className="container text-center" style={{ marginTop: '50px', width: '400px'}}>
            <h2 style={{marginBottom: '40px'}}>Login</h2>
            <form onSubmit={ this.handleSubmit }>
                <div className="form-group">
                    <input
                    
                    placeholder="Email or mobile phone"
                    className={classnames('form-control form-control-lg', {
                        'is-invalid': errors.email_or_phone
                    })}
                    name="email_or_phone"
                    onChange={ this.handleInputChange }
                    value={ this.state.email_or_phone }
                    />
                    {errors.email_or_phone && (<div className="invalid-feedback">{errors.email_or_phone}</div>)}
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
                <FormGroup tag="fieldset">
                    <FormGroup check inline>
                        <Label check>
                        <Input type="radio" name="selectedOption" 
                        value = "loginUser"
                        checked={this.state.selectedOption === "loginUser"}
                        onChange={ this.handleInputChange }/>{' '}
                        Sign in as a user
                        </Label>
                    </FormGroup>
                    <FormGroup check inline>
                        <Label check>
                        <Input type="radio" name="selectedOption" 
                        value = "loginCompany"
                        checked={this.state.selectedOption === "loginCompany"}
                        onChange={ this.handleInputChange }/>{' '}
                        Sign in as a company
                        </Label>
                    </FormGroup>
                </FormGroup>
                <div className="form-group">
                    <button type="submit" className="btn btn-primary btn-lg">
                        Sign In
                    </button>
                </div>
            </form>
        </div>
        )
    }
}

Login.propTypes = {
    loginUser: PropTypes.func.isRequired,
    loginCompany: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
    errors: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
    auth: state.auth,
    errors: state.errors
})

export  default connect(mapStateToProps, { loginUser, loginCompany })(Login)