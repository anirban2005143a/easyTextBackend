import mongoose from 'mongoose';

const chatSchema = new mongoose.Schema({
  prompt: String,
  response: String,
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const promotionalDataChatHistorySchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  chats: [chatSchema],
});

const promotionalDataChatHistory = mongoose.model('promotionalDataChatHistory', promotionalDataChatHistorySchema);

export default promotionalDataChatHistory;
