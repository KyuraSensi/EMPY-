const mongoose = require("mongoose");

const ProgrammingSchema = new mongoose.Schema({
  img: String,
  title: String,
  postedby: String,
  description: String
});

const ProgrammingModule = mongoose.model("programming", ProgrammingSchema);

module.exports = ProgrammingModule;
