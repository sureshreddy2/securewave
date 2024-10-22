// app.js
const express = require('express');
const connectDB = require('./db');
const User = require('./models/User');
const Chat = require('./models/Chat');
const Channel = require('./models/Channel');
const File = require('./models/File');

const app = express();

// Connect to MongoDB
connectDB();

// Middleware
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
