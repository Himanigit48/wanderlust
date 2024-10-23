const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const passportLocalMongoose = require("passport-local-mongoose");

const userSchema = new Schema({
 username: {
    type: String,
    required: true,
    unique: true, // Ensure usernames are unique
  },
  email: {
    type: String,
    required: true,
    unique: true, // Ensure emails are unique
  },
});

// userSchema.plugin(passportLocalMongoose);
userSchema.plugin(passportLocalMongoose, {
  usernameField: 'username' // Specify which field to use as the username
});

module.exports = mongoose.model("User", userSchema);
