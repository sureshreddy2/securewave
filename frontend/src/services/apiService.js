import axios from 'axios';

const api = axios.create({
    baseURL: 'http://3.108.66.202/:5000/api', // Replace <your-server-ip> with your EC2 instance IP
});

// Function to create a user
export const createUser = async (userData) => {
    try {
        const response = await api.post('/users', userData);
        return response.data;
    } catch (error) {
        throw error;
    }
};
