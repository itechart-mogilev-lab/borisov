const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const UserSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: function(){
            return this.phone ? false : true
        }
    },
    phone: {
        type: String,
        required: function(){
            return this.email ? false : true
        }
    },
    password: {
        type: String,
        required: true
    },
    avatar: {
        type: String
    },
    role: {
        type: String,
        default: "user"
    },
    date: {
        type: Date,
        default: Date.now
    },
    isActive: {
        type: Boolean,
        default: false,
        required: true
    }
});

const User = mongoose.model('users', UserSchema);

module.exports = User;