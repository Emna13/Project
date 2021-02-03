const mongoose = require("mongoose");
const config = require("config");
const mongoUri = config.get("mongoUri");

const connectDB = async () => {
  try {
    await mongoose.connect(mongoUri, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    });
    console.log('DB connected')
  } catch (error) {
    console.error(err);
  }
};

module.exports=connectDB
