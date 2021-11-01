const express = require("express");
const router = express.Router();
const User = require("../models/User");
const { body, validationResult } = require('express-validator');
const bcrypt = require('bcryptjs');
var jwt = require('jsonwebtoken');
const fetchuser = require('../middleware/fetchuser');
const jwt_token = require("../JWT_TOKEN");

const JWT_SECRET = jwt_token;

//Route 1 : Create a user using POST "/api/auth/createuser" - no login required
//First auth token will create and store user account in db
router.post("/createuser", [
    body("name", "Enter a Valid Name").isLength({ min: 3 }),
    body("email", "Enter a Valid Email").isEmail(),
    body("password", "Password must be of at least 5 characters").isLength({ min: 5 }),
    body("securityquestion", "Security Question's answer must be of at least 4 characters").isLength({ min: 4 })
], async (req, res) => {
    //If there are errors return bad request with message.
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    try {
        console.log(JWT_SECRET);
        //check if the user with the email already exists
        let user = await User.findOne({ email: req.body.email });
        if (user) {
            return res.status(400).json({ Error: "Duplicate email found, please enter unique email" });
        }
        //Generating hash of password and adding salt to it for security
        const salt = await bcrypt.genSalt(10);
        const hashedPass = await bcrypt.hash(req.body.password, salt);
        const hashedSQA = await bcrypt.hash(req.body.securityquestion, salt);
        //Create new user
        user = await User.create({
            name: req.body.name,
            password: hashedPass,
            email: req.body.email,
            securityquestion: hashedSQA
        });

        const data = {
            user: {
                id: user.id
            }
        }
        //Signing user id with Json Web Token to authenticate user's saved recipes.
        const authToken = jwt.sign(data, JWT_SECRET);
        res.json({ authToken });
    }
    catch (error) {
        console.error(error.message);
        res.status(500).send("Error Occured");
    }
})

//Route 2 : Authenticate a user using POST "/api/auth/login" - no login required
//Second auth token will create a session after authentication of a valid user
router.post("/login", [
    body("email", "Enter a valid email").isEmail(),
    body("password", "Password cannot be null").exists()
], async (req, res) => {
    //If there are errors return bad request with message.
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    //Destructuring email and password from request body.
    const { email, password } = req.body;
    try {
        //Chceking if user exists or not with email.
        let user = await User.findOne({ email });
        //if user does not exists repond with error.
        if (!user) {
            res.status(400).json({Error: "User does not exists." });
        }
        //if user found, comparing hashed password stored in database with entered password.
        const passwordCompare = await bcrypt.compare(password, user.password);//returns boolean value
        if (!passwordCompare) {
            res.status(400).json({ Error: "Try to login with correct credentials." });
        }

        const data = {
            user: {
                id: user.id
            }
        }

        const authToken = jwt.sign(data, JWT_SECRET);
        res.json({ authToken });
    }
    catch (error) {
        console.error(error.message);
        res.status(500).send("Error Occured");
    }
})

//Route 3 : Getting logged-in user data using POST "/api/auth/getuser" - login required
//Verification of auth-token is done here to validate user account and session.
router.post("/getuser", fetchuser , async(req,res) => {
    try
    {
        const userid = req.user.id;
        const user = await User.findById(userid).select("-password -securityquestion");
        res.send(user);
    }
    catch (error) 
    {
        res.status(401).json({ Error: "Enter a valid token" });
    }
})

module.exports = router;