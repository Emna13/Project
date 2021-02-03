const mongoose = require("mongoose");
const questionSchema = mongoose.Schema({
  skill: {
    type: String,
    required: true,
  },

  questionBody: {
    type: String,
    required: true,
  },
});

module.exports = Question = mongoose.model("question", questionSchema);
