const mongoose = require("mongoose");

const blogPostSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    content: { type: String, required: true, default: "" },
    author: { type: String, required: true },
    publishedDate: { type: Date, required: true },
    published: { type: Boolean, default: false },
    user_id: { type: String, required: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model("BlogPost", blogPostSchema);
