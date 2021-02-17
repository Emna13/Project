const Question = require("../model/Question");

exports.save = async (req, res) => {
  const { skill, questionBody } = req.body;
  try {
    const newQuestion = new Question({
      skill,
      questionBody,
      postedBy: req.user,
    });
    await newQuestion.save();
    res.status(201).json(newQuestion);
  } catch (error) {
    console.error(error);
    res.status(500).json({ errors: error });
  }
};

exports.see = async (req, res) => {
  try {
    const question = await Question.find()
      .populate("postedBy", "name")
      .populate("comments.postedBy", "name")
      .exec();
    res.send(question);
  } catch (error) {
    console.error(error);
    res.status(500).json({ errors: error.message });
  }
};

exports.comment = async (req, res) => {
  const commentId = req.params.id;
  const commentMod = { text: req.body.text, postedBy: req.user._id };
  try {
    const comment = await Question.findByIdAndUpdate(
      commentId,
      { $push: { comments: commentMod } },
      { new: true, useFindAndModify: false }
    ).populate("comments.postedBy", "name");
    res.send(comment);
  } catch (error) {
    console.error(error);
  }
};

