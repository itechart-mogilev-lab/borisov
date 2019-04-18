const express = require('express');
const router = express.Router();
const gravatar = require('gravatar');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const passport = require('passport');
const validateRegisterInput = require('../validation/companyRegister');
const validateLoginInput = require('../validation/login');

const Company = require('../models/Company');

router.post('/register', function(req, res) {

    const { errors, isValid } = validateRegisterInput(req.body);
    if(!isValid) {
        return res.status(400).json(errors);
    }
    Company.findOne({
        phone: req.body.phone
    }).then(user => {
        if(user) {
            return res.status(400).json({
                phone: 'Phone already exists'
            });
        }
        else {
            Company.findOne({
                email: req.body.email
            }).then(user => {
                if(user) {
                    return res.status(400).json({
                        email: 'Email already exists'
                    });
                }
                else {
                    const avatar = gravatar.url(req.body.email, {
                        s: '200',
                        r: 'pg',
                        d: 'mm'
                    });
                    const newCompany = new Company({
                        companyName: req.body.companyName,
                        email: req.body.email,
                        adress: req.body.adress,
                        discription: req.body.discription,
                        phone: req.body.phone,
                        password: req.body.password,
                        rooms: {
                            toilet: {
                                price: req.body.toiletPrice,
                                time: req.body.toiletTime
                            },
                            small: {
                                price: req.body.smallRoomPrice,
                                time: req.body.smallRoomTime
                            },
                            big: {
                                price: req.body.bigRoomPrice,
                                time: req.body.bigRoomTime
                            }
                        },
                        services: {
                            doStandartCleaning: req.body.doStandartCleaning,
                            doGeneralCleaning: req.body.doGeneralCleaning,
                            doAfterRepairCleaning: req.body.doAfterRepairCleaning,
                            doOfficeCleaning: req.body.doOfficeCleaning,
                            doIndustrialCleaning: req.body.doIndustrialCleaning,
                            doFurnitureDry: req.body.doFurnitureDry,
                            doCarpetDry: req.body.doCarpetDry,
                            doPoolDry: req.body.doPoolDry
                        },
                        avatar
                    });
                    
                    bcrypt.genSalt(10, (err, salt) => {
                        if(err) console.error('There was an error', err);
                        else {
                            bcrypt.hash(newCompany.password, salt, (err, hash) => {
                                if(err) console.error('There was an error', err);
                                else {
                                    newCompany.password = hash;
                                    newCompany
                                        .save()
                                        .then(company => {
                                            res.json(company)
                                        }); 
                                }
                            });
                        }
                    });
                }
            });
        }
    });
});

router.post('/login', (req, res) => {

    const { errors, isValid } = validateLoginInput(req.body);

    if(!isValid) {
        return res.status(400).json(errors);
    }

    const email_or_phone = req.body.email_or_phone;
    const password = req.body.password;
    const criteria = (email_or_phone.indexOf('@') === -1) ? {phone: email_or_phone} : {email: email_or_phone};
    Company.findOne(criteria)
        .then(user => {
            if(!user) {
                errors.email_or_phone = 'User not found'
                return res.status(404).json(errors);
            }
            bcrypt.compare(password, user.password)
                    .then(isMatch => {
                        if(isMatch) {
                            const payload = {
                                id: user.id,
                                name: user.name,
                                avatar: user.avatar,
                                role: user.role
                            }
                            jwt.sign(payload, 'secret', {
                                expiresIn: 3600
                            }, (err, token) => {
                                if(err) console.error('There is some error in token', err);
                                else {
                                    res.json({
                                        success: true,
                                        token: `Bearer ${token}`
                                    });
                                }
                            });
                        }
                        else {
                            errors.password = 'Incorrect Password';
                            return res.status(400).json(errors);
                        }
                    });
        });
});

module.exports = router;