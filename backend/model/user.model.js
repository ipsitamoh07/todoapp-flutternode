const mongoose = require('mongoose');
const db = require('../config/db');
const bcrypt = require('bcrypt');

const { Schema } = mongoose;

const userSchema = new Schema({
  email: {
    type: String,
    lowercase: true,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
});

// Pre-save hook to hash the password before saving
userSchema.pre('save', async function (next) {
  try {
    const user = this;
    if (!user.isModified('password')) {
      return next();
    }
    const salt = await bcrypt.genSalt(10);
    const hashpass = await bcrypt.hash(user.password, salt);
    user.password = hashpass;
    next();
  } catch (error) {
    next(error);
  }
});

// Method to compare the password for login
userSchema.methods.comparePassword = async function (candidatePassword) {
  try {
    return await bcrypt.compare(candidatePassword, this.password);
  } catch (error) {
    throw error;
  }
};

const UserModel = db.model('User', userSchema);

module.exports = UserModel;
