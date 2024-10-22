import React, { useState } from 'react';
import { sendOtp, verifyOtp } from '../services/authService';

const Login = () => {
    const [phone, setPhone] = useState('');
    const [otp, setOtp] = useState('');

    const handleSendOtp = async () => {
        await sendOtp(phone);
        alert('OTP sent to your phone');
    };

    const handleVerifyOtp = async () => {
        const success = await verifyOtp(phone, otp);
        if (success) {
            alert('OTP verified successfully');
        } else {
            alert('Invalid OTP');
        }
    };

    return (
        <div>
            <h2>Login</h2>
            <input
                type="text"
                placeholder="Phone Number"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
            />
            <button onClick={handleSendOtp}>Send OTP</button>

            <input
                type="text"
                placeholder="OTP"
                value={otp}
                onChange={(e) => setOtp(e.target.value)}
            />
            <button onClick={handleVerifyOtp}>Verify OTP</button>
        </div>
    );
};

export default Login;
