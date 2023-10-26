const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
  username: String,
  email: String,
  password: String,
  age: Number
});

module.exports = mongoose.model.Users || mongoose.model("Users", UserSchema);
