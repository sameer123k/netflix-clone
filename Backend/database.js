const mongoose = require('mongoose');
require('dotenv').config();

const DbUrl = process.env.DBURL

mongoose.connect(DbUrl);

mongoose.connection.on('connected', () => {
    console.log('Database Connected Successfully');
})

mongoose.connection.on('error', () => {
    console.log('error');
})

exports.module = mongoose;