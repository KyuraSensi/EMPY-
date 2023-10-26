const mongoose = require("mongoose");

const GraphicSchema = new mongoose.Schema({
  img: String,
  title: String,
  postedby: String,
  description: String
});

const GraphicModule = mongoose.model("graphic", GraphicSchema);

module.exports = GraphicModule;
