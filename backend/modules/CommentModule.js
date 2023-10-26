const mongoose = require("mongoose");

const CommentSchema = new mongoose.Schema({
  user: String,
  comments: String,
});

const CommentModule = mongoose.model("commment", CommentSchema);

module.exports = CommentModule;
