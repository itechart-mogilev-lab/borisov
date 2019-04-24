const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const CompanySchema = new Schema({
    avatar: {
        type: String
    },
    companyName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    adress: {
        type: String,
        required: true
    },
    discription: {
        type: String,
        default: false,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    avatar: {
        type: String
    },
    date: {
        type: Date,
        default: Date.now
    },
    rating: {
        type: Number,
        default: 0
    },
    role: {
        type: String,
        default: "company"
    },
    isActive: {
        type: Boolean,
        default: false,
        required: true
    },
    services: {
        doStandartCleaning: {
            type: Boolean,
            default: false
        },
        doGeneralCleaning: {
            type: Boolean,
            default: false
        },
        doAfterRepairCleaning: {
            type: Boolean,
            default: false
        },
        doOfficeCleaning: {
            type: Boolean,
            default: false
        },
        doIndustrialCleaning: {
            type: Boolean,
            default: false
        },
        doFurnitureDry: {
            type: Boolean,
            default: false
        },
        doCarpetDry: {
            type: Boolean,
            default: false
        },
        doPoolDry: {
            type: Boolean,
            default: false
        }
    },
    rooms: {
        toilet: {
            price: { type: Number, default: 0 },
            time: { type: Number, default: 0 }
        },
        small: {
            price: { type: Number, default: 0 },
            time: { type: Number, default: 0 }
        },
        big: {
            price: { type: Number, default: 0 },
            time: { type: Number, default: 0 }
        }
    }
});

const Company = mongoose.model('companys', CompanySchema);

module.exports = Company;