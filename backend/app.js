// app.js
const express = require('express');
const connectDB = require('./config/db');
const dotenv = require('dotenv'); // Import dotenv
const User = require('./models/User');
const Chat = require('./models/Chat');
const Channel = require('./models/Channel');
const File = require('./models/File');
const cors = require('cors'); // Import the cors package

const app = express();

// Load environment variables
dotenv.config();

// Connect to MongoDB
connectDB();

// Set Mongoose strictQuery option
const mongoose = require('mongoose');
mongoose.set('strictQuery', true); // or false, based on your preference

// Middleware
app.use(cors()); // Enable CORS for all routes
app.use(express.json());

// Example Route
app.post('/api/users', async (req, res) => {
    try {
        const newUser = new User(req.body);
        await newUser.save();
        res.status(201).json(newUser);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
