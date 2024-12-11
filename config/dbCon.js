const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log('MongoDB connected successfully');
      } catch (err) {
        console.error('MongoDB connection error:', err.message);
        process.exit(1); // Exit the app if the connection fails
      }
}

module.exports = connectDB