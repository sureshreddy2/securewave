// models/Chat.js
const mongoose = require('mongoose');

const messageSchema = new mongoose.Schema({
    senderId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    text: { type: String, required: true },
    media: { type: Array, default: [] },
    timestamp: { type: Date, default: Date.now },
    isSelfDestruct: { type: Boolean, default: false },
    isEncrypted: { type: Boolean, default: true },
});

const chatSchema = new mongoose.Schema({
    participants: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
    messages: [messageSchema],
    createdAt: { type: Date, default: Date.now },
    isGroupChat: { type: Boolean, default: false },
});

module.exports = mongoose.model('Chat', chatSchema);
