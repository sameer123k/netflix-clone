const mongoose = require('mongoose');

const signupdata = new mongoose.Schema({
    first_name: {
        type: String,
        required: true
    },
    last_name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    dob: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model('signupmodel', signupdata);