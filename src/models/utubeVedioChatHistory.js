import mongoose from 'mongoose';

const chatSchema = new mongoose.Schema({
  prompt: String,
  response: String,
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const utubeVedioChatHistorySchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  chats: [chatSchema],
});

const utubeVedioChatHistory = mongoose.model('utubeVedioChatHistory', utubeVedioChatHistorySchema);

export default utubeVedioChatHistory;
