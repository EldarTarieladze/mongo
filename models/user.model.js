const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const info = new Schema({
  name: String,
  sname: String,
});

const description = new Schema({
  title: String,
  format: String,
  info: [info],
});
const userSchema = new Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  description: [description],
});

module.exports = mongoose.model("users", userSchema);
