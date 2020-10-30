const Manager = require('../models/Manager');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');
const { signupSchema, loginSchema } = require('./authValidation');
dotenv.config();

const registerManager = async (req, res) => {
    let err = await signupSchema.validate(req.body).catch((err) => {
        return err;
    });

    if (err.errors) {
        return res.status(400).send(err.errors[0]);
    }

    try {
        const { firstName, lastName, email, password, avatar, gender, age } = req.body;

        const managerExists = await Manager.find({ email });
        if (managerExists.length) {
            return res.status(400).send(`Manager with email id ${email} already exists`);
        }
        const hashedPassword = await bcrypt.hash(password, await bcrypt.genSalt(10));

        const manager = new Manager({
            firstName,
            lastName,
            email,
            password: hashedPassword,
            avatar,
            gender,
            age
        });

        const savedManager = manager.save();

        const tokenisedManager = { email: savedManager.email };
        const accessToken = await jwt.sign(tokenisedManager, process.env.SECRET_KEY_TO_ACCESS);
        return res.status(201).send({ accessToken: accessToken });
    } catch (err) {
        console.log(err);
        return res.status(400).send(err);
    }
};

const loginManager = async (req, res) => {
    let err = await loginSchema.validate(req.body).catch((err) => {
        return err;
    });

    if (err.errors) {
        return res.status(400).send(err.errors[0]);
    }
    try {
        const { email } = req.body;

        let manager = await Manager.findOne({ email });
        if (!manager) {
            return res.status(400).send('Email not found');
        }

        const validPassword = await bcrypt.compare(req.body.password, manager.password);
        if (!validPassword) {
            return res.status(400).send('Invalid password');
        }

        const tokenisedManager = { email: manager.email };
        const accessToken = await jwt.sign(tokenisedManager, process.env.SECRET_KEY_TO_ACCESS);
        return res.status(201).send({ accessToken: accessToken });
    } catch (err) {
        console.log(err);
        return res.status(400).send(err);
    }
};
module.exports = { registerManager, loginManager };
