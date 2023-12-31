import mongoose, { Schema } from "mongoose";

const TaskSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },

  content: {
    type: String,
    required: true,
  },

  addedDate: {
    type: Date,
    required: true,
    default: Date.now(),
  },

  status: {
    type: String,
    enum: ["pending", "completed"], //only these values possible
    default: "pending",
  },

  //Link user and task

  userId: {
    type: Schema.Types.ObjectId, //userId of the user
    required: true,
    ref: "users", //users collection
  },
});

const Task = mongoose.models.tasks || mongoose.model("tasks", TaskSchema);

export default Task;
