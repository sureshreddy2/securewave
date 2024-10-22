const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    phone: { type: String, required: true, unique: true },
    otp: { type: String },
    // Additional fields can be added as required
});

module.exports = mongoose.model('User', userSchema);
const User = require('../models/User');

// Function to send OTP
exports.sendOtp = async (req, res) => {
    const { phone } = req.body;
    const otp = Math.floor(100000 + Math.random() * 900000).toString(); // Generate OTP
    await User.findOneAndUpdate({ phone }, { otp }, { upsert: true }); // Save OTP to DB

    // Logic to send OTP via SMS can be added here

    res.json({ success: true, message: 'OTP sent' });
};

// Function to verify OTP
exports.verifyOtp = async (req, res) => {
    const { phone, otp } = req.body;
    const user = await User.findOne({ phone });

    if (user && user.otp === otp) {
        res.json({ success: true, message: 'OTP verified' });
    } else {
        res.json({ success: false, message: 'Invalid OTP' });
    }
};
