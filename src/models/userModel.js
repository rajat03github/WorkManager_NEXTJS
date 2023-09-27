import mongoose, { Schema, model } from "mongoose";

//! WE can directly import schema,  models as they are destructured and use it without 'mongoose.()'

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },

    email: {
      unique: true,
      type: String,
      required: [true, "Email is Required !!"],
    },

    password: {
      type: String,
      required: [true, "Password is Required !!"],
    },
  },
  {
    timestamps: true,
  }
);
//! in nextjs , we have to use this too

const User = mongoose.models.users || mongoose.model("users", userSchema);

export default User;
