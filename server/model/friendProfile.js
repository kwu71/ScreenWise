import mongoose from "mongoose";

// Creating a schema for mongoDB, this outlines the data and defines each specific piece of data's needs.
const friendProfileSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
      min: 2,
      max: 50,
    },
    timeSpentDaily: [{
      date: {
        type: Date,
        default: Date.now,
      },
      screenTime: {
        type: Number,
        default: 0,
      }
    }],
    bio: {
      type: String,
      default: '',
      max: 255,
    },
});

const friendProfile = mongoose.model("friendProfile", userSchema);
export default friendProfile;