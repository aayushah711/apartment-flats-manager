const mongoose = require('mongoose');

const flatSchema = new mongoose.Schema(
    {
        managerId: {
            type: mongoose.ObjectId,
            required: true
        },
        avatar: {
            type: String
        },
        flatType: {
            type: String,
            required: true
        },
        block: {
            type: String,
            required: true
        },
        roomNo: {
            type: Number,
            required: true
        }
    },
    { versionKey: false }
);

module.exports = mongoose.model('Flat', flatSchema);
