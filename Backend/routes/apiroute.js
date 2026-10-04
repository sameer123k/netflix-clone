const express = require('express');

const bcrypt = require('bcryptjs');

const router = express.Router();

const signupModel = require('../model/signupdata');

// http://localhost:3000/api/addUser

router.post('/addUser', async (req, res) => {

    try {
        const UsersDataIs = new signupModel({
            first_name: req.body.first_name,
            last_name: req.body.last_name,
            email: req.body.email,
            password: await bcrypt.hash(req.body.password, 12),
            dob: req.body.dob,
        });

        const allDataIs = await UsersDataIs.save();

        res.status(200).json({
            message: 'Registration Successfully',
            data: allDataIs
        });

    } catch (error) {

        res.status(500).json({
            error: error.message
        });

    }

});

// http://localhost:3000/api/login

router.post('/login', async (req, res) => {
    const email = req.body.email;
    const password = req.body.password;
    try {
        const emailCheck = await signupModel.findOne({ email });
        if (!emailCheck) {
            res.json({ status: 1, "message": "Email Not Found" });
        }
        else {
            const passcheck = await bcrypt.compare(password, emailCheck.password);
            if (!passcheck) {
                res.json({ status: 2, "message": "Password Incorrect" });
            }
            else {
                const userName = emailCheck.first_name + " " + emailCheck.last_name;

                res.status(200).json({ status: 0, "message": "Login Successfull", userName });
            }
        }
    } catch (error) {
        console.log(error);
    }
})


module.exports = router; 