// models/User.js
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    phoneNumber: {
        type: String,
        required: true,
        select: false, // Hide this field by default
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
    profileSettings: {
        theme: { type: String, default: 'default' },
        emojis: { type: Array, default: [] },
        animatedBackground: { type: String, default: '' },
    },
    isTwoStepVerified: {
        type: Boolean,
        default: false,
    },
});

module.exports = mongoose.model('User', userSchema);
