const Validator = require('validator');
const isEmpty = require('./is-empty');

module.exports = function validateRegisterInput(data) {
    let errors = {};
    data.companyName = !isEmpty(data.companyName) ? data.companyName : '';
    data.email = !isEmpty(data.email) ? data.email : '';
    data.phone = !isEmpty(data.phone) ? data.phone : '';
    data.discription = !isEmpty(data.discription) ? data.discription : '';
    data.adress = !isEmpty(data.adress) ? data.adress : '';
    data.password = !isEmpty(data.password) ? data.password : '';
    data.password_confirm = !isEmpty(data.password_confirm) ? data.password_confirm : '';

    if(!Validator.isLength(data.companyName, { min: 2, max: 30 })) {
        errors.companyName = 'Company name must be between 2 to 30 chars';
    }
    
    if(Validator.isEmpty(data.companyName)) {
        errors.companyName = 'Company name is required';
    }

    if(!Validator.isEmail(data.email)) {
        errors.email = 'Email is invalid';
    }

    if(Validator.isEmpty(data.password)) {
        errors.email = 'Email is required';
    }

    if(!Validator.isMobilePhone(data.phone)) {
        errors.phone = 'Phone is invalid';
    }

    if(Validator.isEmpty(data.phone)) {
        errors.phone = 'Phone is required';
    }

    if(!Validator.isLength(data.password, {min: 6, max: 30})) {
        errors.password = 'Password must have at least 6 and at last 30 chars';
    }

    if(Validator.isEmpty(data.password)) {
        errors.password = 'Password is required';
    }

    if(!Validator.isLength(data.password_confirm, {min: 6, max: 30})) {
        errors.password_confirm = 'Password must have at least 6 and at last 30 chars';
    }

    if(!Validator.equals(data.password, data.password_confirm)) {
        errors.password_confirm = 'Password and Confirm Password must match';
    }

    if(Validator.isEmpty(data.password_confirm)) {
        errors.password_confirm = 'Password confirm is required';
    }

    if(Validator.isEmpty(data.discription)) {
        errors.discription = 'Company discription is required';
    }

    if(Validator.isEmpty(data.adress)) {
        errors.adress = 'Company adress is required';
    }

    if(!data.doStandartCleaning && !data.doGeneralCleaning && !data.doAfterRepairCleaning
        && !data.doOfficeCleaning && !data.doIndustrialCleaning && !data.doFurnitureDry
        && !data.doCarpetDry && !data.doPoolDry) {
            errors.optionsSelected = 'Select at least 1 option';
        }

    return {
        errors,
        isValid: isEmpty(errors)
    }
}