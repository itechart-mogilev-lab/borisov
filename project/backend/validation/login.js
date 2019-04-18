const Validator = require('validator');
const isEmpty = require('./is-empty');

module.exports = function validateLoginInput(data) {
    let errors = {};
    data.email_or_phone = !isEmpty(data.email_or_phone) ? data.email_or_phone : '';
    data.password = !isEmpty(data.password) ? data.password : '';

    if(!Validator.isEmail(data.email_or_phone) && !Validator.isMobilePhone(data.email_or_phone)) {
        errors.email_or_phone = 'Email or mobile phone is invalid';
    }

    if(Validator.isEmpty(data.email_or_phone)) {
        errors.email_or_phone = 'Email or mobile phone is required';
    }

    if(!Validator.isLength(data.password, {min: 6, max: 30})) {
        errors.password = 'Password must have 6 chars';
    }

    if(Validator.isEmpty(data.password)) {
        errors.password = 'Password is required';
    }

    return {
        errors,
        isValid: isEmpty(errors)
    }
}