const mongoose = require("mongoose");

const connectToMongo = async () => {
  try {
    await mongoose.connect(process.env.CNX_URL);
    console.log("connected to mongo cluster...");
  } catch (e) {
    console.log(e);
  }
};

module.exports = connectToMongo;
