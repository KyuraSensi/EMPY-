const mongoose = require("mongoose");

const VisualSchema = new mongoose.Schema({
  img: String,
  title: String,
  postedby: String,
  description: String
});

const VisualModule = mongoose.model("visualart", VisualSchema);

module.exports = VisualModule;
