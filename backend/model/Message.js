const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema.Types;
const messageSchema = mongoose.Schema({
  subject: {
    type: String,
    required: true,
  },
  message: {
    type: String,
    required: true,
  },
  sendBy: {
    type: ObjectId,
    ref: "user",
  },
  date: { type: Date, default: Date},
  
});

module.exports = Message = mongoose.model("message", messageSchema);