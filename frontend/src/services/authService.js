import axios from 'axios';

export const sendOtp = async (phone) => {
    return await axios.post('http://172.31.35.80:5000/api/send-otp', { phone });
};

export const verifyOtp = async (phone, otp) => {
    const response = await axios.post('http://172.31.35.80:5000/api/verify-otp', { phone, otp });
    return response.data.success;
};
