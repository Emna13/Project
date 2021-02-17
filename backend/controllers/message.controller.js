const Message = require("../model/Message");

exports.saveM = async (req, res) => {
  const { subject, message } = req.body;
  try {
    const newMessage = new Message({
      subject,
      message,
      sendBy: req.user,
    });
    await newMessage.save();
    res.status(201).json(newMessage);
  } catch (error) {
    console.error(error);
    res.status(500).json({ errors: error });
  }
};

exports.seeM = async (req, res) => {
  try {
    const message = await Message.find().populate("sendBy", "name lastName").exec();

    res.send(message);
  } catch (error) {
    console.error(error);
    res.status(500).json({ errors: error.message });
  }
};
