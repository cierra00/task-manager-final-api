const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  password: {
    type: String,
    required: true,
  },
  // firstname: {
  //   type: String,
  //   required: true,
  //   trim: true
  // },
  // lastname: {
  //   type: String,
  //   required: true,
  //   trim: true
  // },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('User', UserSchema);
