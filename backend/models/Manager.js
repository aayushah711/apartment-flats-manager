const mongoose = require('mongoose');

const managerSchema = new mongoose.Schema(
    {
        firstName: {
            type: String,
            required: true,
            min: 2
        },
        lastName: {
            type: String,
            required: true,
            min: 2
        },
        email: {
            type: String,
            required: true,
            unique: true
        },
        password: {
            type: String,
            required: true,
            min: 2
        },
        avatar: {
            type: String
        },
        gender: {
            type: String
        },
        age: {
            type: Number
        }
    },
    { versionKey: false }
);

module.exports = mongoose.model('Manager', managerSchema);
