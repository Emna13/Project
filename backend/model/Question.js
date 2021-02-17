const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema.Types;
const questionSchema = mongoose.Schema(
  {
    skill: {
      type: String,
      required: true,
    },

    questionBody: {
      type: String,
      required: true,
    },
    comments: [
      {
        text: String,
        postedBy: { type: ObjectId, ref: "user" },
        date: { type: Date, default: Date},
      },
    ],
    postedBy: {
      type: ObjectId,
      ref: "user",
    },
    date: { type: Date, default: Date},
  },
  
);

module.exports = Question = mongoose.model("question", questionSchema);
