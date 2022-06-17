const mongoose = require("mongoose");

const mongoConn = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGODB_URL);
    console.log(
      `MongoDB is connected via ${conn.connection.host}`.blue.underline
    );
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

module.exports = mongoConn;
