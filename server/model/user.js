import mongoose from 'mongoose';

// Creating the general userSchema to store data in mongoDB
const userSchema = new mongoose.Schema (
  {
    googleId: {
      type: String,
      unique: true,
    },
    username: {
      type: String,
      unique: true,
    },
    friendList: [{
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
    }],
    friendSent: [{
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
    }],
    friendReceived: [{
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
    }],
    screenTimeData: [{
      date: {
        type: Date,
      },
      time: {
        type: Number,
      },
    }],
    bio: {
      type: String,
      max: 255,
    },
  },
  {
    timestamps: true,
  }
);

const User = mongoose.model('User', userSchema);
export default User;

