import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { registerCompany } from '../../api/company/authentication';
import classnames from 'classnames';
import { FormGroup, Label, Input, Table } from 'reactstrap';

class RegisterCompany extends Component {

    constructor() {
        super();
        this.state = {
            companyName: '',
            email: '',
            phone: '',
            adress: '',
            discription: '',
            password: '',
            password_confirm: '',
            toiletPrice: 0,
            smallRoomPrice: 0,
            bigRoomPrice: 0,
            toiletTime: 0,
            smallRoomTime: 0,
            bigRoomTime: 0,
            doStandartCleaning: false,
            doGeneralCleaning: false,
            doAfterRepairCleaning: false,
            doOfficeCleaning: false,
            doIndustrialCleaning: false,
            doFurnitureDry: false,
            doCarpetDry: false,
            doPoolDry: false,
            errors: {}
        }
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleInputChange(e) {
        const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value;
        this.setState({
            [e.target.name]: value
        });
    }

    handleSubmit(e) {
        e.preventDefault();
        const company = {
            companyName: this.state.companyName,
            email: this.state.email,
            adress: this.state.adress,
            discription: this.state.discription,
            phone: this.state.phone,
            password: this.state.password,
            password_confirm: this.state.password_confirm,
            toiletPrice: this.state.toiletPrice,
            smallRoomPrice: this.state.smallRoomPrice,
            bigRoomPrice: this.state.bigRoomPrice,
            toiletTime: this.state.toiletTime,
            smallRoomTime: this.state.smallRoomTime,
            bigRoomTime: this.state.bigRoomTime,
            doStandartCleaning: this.state.doStandartCleaning,
            doGeneralCleaning: this.state.doGeneralCleaning,
            doAfterRepairCleaning: this.state.doAfterRepairCleaning,
            doOfficeCleaning: this.state.doOfficeCleaning,
            doIndustrialCleaning: this.state.doIndustrialCleaning,
            doFurnitureDry: this.state.doFurnitureDry,
            doCarpetDry: this.state.doCarpetDry,
            doPoolDry: this.state.doPoolDry
        }
        this.props.registerCompany(company, this.props.history);
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
            <h2 style={{marginBottom: '40px'}}>Company Registration</h2>
            <form onSubmit={ this.handleSubmit }>
                <div className="form-group">
                    <input
                    type="text"
                    placeholder="Company Name"
                    className={classnames('form-control form-control-lg', {
                        'is-invalid': errors.companyName
                    })}
                    name="companyName"
                    onChange={ this.handleInputChange }
                    value={ this.state.companyName }
                    />
                    {errors.companyName && (<div className="invalid-feedback">{errors.companyName}</div>)}
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
                <h6>Select the options your company provides:</h6>
                <div className="input-group mb-3">
                    <div className="input-group-prepend">
                        <div className="input-group-text">
                            <input
                            type="checkbox"
                            name="doStandartCleaning"
                            onChange={this.handleInputChange}
                            checked={this.state.doStandartCleaning}
                            />
                        </div>
                    </div>
                    <input type="text" className="form-control text-center" defaultValue="Standart Cleaning" readOnly/>
                </div>
                <div className="input-group mb-3">
                    <div className="input-group-prepend">
                        <div className="input-group-text">
                            <input
                            type="checkbox"
                            name="doGeneralCleaning"
                            onChange={this.handleInputChange}
                            checked={this.state.doGeneralCleaning}
                            />
                        </div>
                    </div>
                    <input type="text" className="form-control text-center" defaultValue="General Cleaning" readOnly/>
                </div>
                <div className="input-group mb-3">
                    <div className="input-group-prepend">
                        <div className="input-group-text">
                            <input
                            type="checkbox"
                            name="doAfterRepairCleaning"
                            onChange={this.handleInputChange}
                            checked={this.state.doAfterRepairCleaning}
                            />
                        </div>
                    </div>
                    <input type="text" className="form-control text-center" defaultValue="After Repair Cleaning" readOnly/>
                </div>
                <div className="input-group mb-3">
                    <div className="input-group-prepend">
                        <div className="input-group-text">
                            <input
                            type="checkbox"
                            name="doOfficeCleaning"
                            onChange={this.handleInputChange}
                            checked={this.state.doOfficeCleaning}
                            />
                        </div>
                    </div>
                    <input type="text" className="form-control text-center" defaultValue="Office Cleaning" readOnly/>
                </div>
                <div className="input-group mb-3">
                    <div className="input-group-prepend">
                        <div className="input-group-text">
                            <input
                            type="checkbox"
                            name="doIndustrialCleaning"
                            onChange={this.handleInputChange}
                            checked={this.state.doIndustrialCleaning}
                            />
                        </div>
                    </div>
                    <input type="text" className="form-control text-center" defaultValue="Industrial Cleaning" readOnly/>
                </div>
                <div className="input-group mb-3">
                    <div className="input-group-prepend">
                        <div className="input-group-text">
                            <input
                            type="checkbox"
                            name="doFurnitureDry"
                            onChange={this.handleInputChange}
                            checked={this.state.doFurnitureDry}
                            />
                        </div>
                    </div>
                    <input type="text" className="form-control text-center" defaultValue="Furniture Dry" readOnly/>
                </div>
                <div className="input-group mb-3">
                    <div className="input-group-prepend">
                        <div className="input-group-text">
                            <input
                            type="checkbox"
                            name="doCarpetDry"
                            onChange={this.handleInputChange}
                            checked={this.state.doCarpetDry}
                            />
                        </div>
                    </div>
                    <input type="text" className="form-control text-center" defaultValue="Carpet Dry" readOnly/>
                </div>
                <div className="input-group mb-3">
                    <div className="input-group-prepend">
                        <div className="input-group-text">
                            <input
                            type="checkbox"
                            name="doPoolDry"
                            onChange={this.handleInputChange}
                            checked={this.state.doPoolDry}
                            />
                        </div>
                    </div>
                    <input type="text" className="form-control text-center" defaultValue="Pool Dry" readOnly/>
                </div>
                <div style={{color: "red"}}>{errors.optionsSelected}</div>
                <FormGroup>
                    <Label for="discription">Describe your company:</Label>
                    <Input type="textarea" name="discription" id="discription" 
                    onChange={this.handleInputChange} value={ this.state.discription }/>
                    <div style={{color: "red"}}>{errors.discription}</div>
                </FormGroup>
                <FormGroup>
                    <Input type="adress" name="adress" id="adress" placeholder="Company adress" className="text-center"
                    onChange={this.handleInputChange} value={ this.state.adress } />
                    <div style={{color: "red"}}>{errors.adress}</div>
                </FormGroup>
                <h6>Pricelist, $:</h6>
                <Table>
                    <thead>
                    <tr>
                        <th>Toilet</th>
                        <th>Big room</th>
                        <th>Small room</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>
                            <Input type="number" step="0.1" min="0" name="toiletPrice" className="text-center"
                            onChange={this.handleInputChange} value={ this.state.toiletPrice } />
                        </td>
                        <td>
                            <Input type="number" step="0.1" min="0" name="bigRoomPrice" className="text-center"
                            onChange={this.handleInputChange} value={ this.state.bigRoomPrice } />
                        </td>
                        <td>
                            <Input type="number" step="0.1" min="0" name="smallRoomPrice" className="text-center"
                            onChange={this.handleInputChange} value={ this.state.smallRoomPrice } />
                        </td>
                    </tr>
                    </tbody>
                </Table>
                <h6>Time, hrs:</h6>
                <Table>
                    <thead>
                    <tr>
                        <th>Toilet</th>
                        <th>Big room</th>
                        <th>Small room</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>
                            <Input type="number" step="0.5" min="0" name="toiletTime" className="text-center"
                            onChange={this.handleInputChange} value={ this.state.toiletTime } />
                        </td>
                        <td>
                            <Input type="number" step="0.5" min="0" name="bigRoomTime" className="text-center"
                            onChange={this.handleInputChange} value={ this.state.bigRoomTime } />
                        </td>
                        <td>
                            <Input type="number" step="0.5" min="0" name="smallRoomTime" className="text-center"
                            onChange={this.handleInputChange} value={ this.state.smallRoomTime } />
                        </td>
                    </tr>
                    </tbody>
                </Table>
                <div className="form-group text-center">
                    <button type="submit" className="btn btn-primary btn-lg">
                        Register Company
                    </button>
                </div>
            </form>
        </div>
        )
    }
}

RegisterCompany.propTypes = {
    registerCompany: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    auth: state.auth,
    errors: state.errors
});

export default connect(mapStateToProps,{ registerCompany })(withRouter(RegisterCompany))