import mongoose from "mongoose";

const questionSchema = new mongoose.Schema(
  {
    question: String,
    options: [String],
    answer: String,
  },

);

const Question1 = mongoose.model("Question", questionSchema);

export default Question1;
