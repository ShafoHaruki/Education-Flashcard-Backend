const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    index: true,
    unique: true,
    minlength: 3,
    lowercase: true
  },
  password: {
    type: String,
    required: true,
    minlength: 8
  }
  // flashcards: [{ type: mongoose.Schema.Types.ObjectId, ref: "Flashcard" }]
});

userSchema.pre("save", async function(next) {
  const rounds = 10;
  this.password = await bcrypt.hash(this.password, rounds);
  next();
});

const User = mongoose.model("User", userSchema);

module.exports = User;
