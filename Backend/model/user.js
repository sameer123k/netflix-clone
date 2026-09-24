const { default: mongoose } = require('mongoose');
const moongoose = require('mongoose');

const UserData01 = new mongoose.Schema({
    name: {
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
    confirmpassword: {
        type: String,
        required: true
    },
    dob: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model('userData', UserData01);