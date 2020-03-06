const mongoose = require('mongoose');

const connectDB = async function () {
  const conn = await mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true
  });

  console.log(`MongoDB Connected: ${conn.connection.host}`.brightYellow.underline.bold)
}

module.exports = connectDB;