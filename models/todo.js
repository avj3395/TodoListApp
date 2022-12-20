import mongoose from "mongoose";

const todoSchema = mongoose.Schema({
  email: String,
  name: String,
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const todoData = mongoose.model("todoDatas", todoSchema);
export default todoData;
