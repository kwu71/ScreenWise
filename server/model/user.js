import mongoose from "mongoose";

// Creating a schema for mongoDB, this outlines the data and defines each specific piece of data's needs.
const userSchema = new mongoose.Schema;(
  {
    username: {
      type: String,
      required: true,
      unique: true,
      min: 2,
      max: 50,
    },
    password: {
      type: String,
      required: true,
      min: 8,
    },
    friends: {
      type: Array,
      default: [],
    },
    timeSpent: {
      type: Number,
      default: 0,
    },
    socialMedia: {
      type: String,
      default: '',
    },
    bio: {
      type: String,
      default: '',
      max: 255,
    },
});

const User = mongoose.model("User", userSchema);
export default User;