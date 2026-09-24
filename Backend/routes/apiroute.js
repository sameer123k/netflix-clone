const express = require('express');

const app = express.Router();

const modelUrl = require('../model/user');


// 10.140.255.139:3000/api/addUser/

app.post('/addUser', async (req, res) => {
    try {
        const UsersDataIs = new modelUrl({
            name: req.body.name,
            email: req.body.email,
            password: req.body.password,
            confirmpassword: req.body.confirmpassword,
            dob: req.body.dob,
        })

        const allDataIs = await UsersDataIs.save();

        res.status(200).json({
            "message": 'Data Stored Successfully',
            "data": allDataIs
        })

    } catch (error) {
        res.status(402).json
            ({ error })
    }
})

module.exports = express;
