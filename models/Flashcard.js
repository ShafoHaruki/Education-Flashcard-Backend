const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  id: {
    type: String,
    required: true,
    index: true
  },
  character: {
    type: String,
    required: true,
    index: true
  },
  pinyin: {
    type: String,
    required: true,
    index: true
  },
  meaning: {
    type: String,
    required: true,
    index: true
  },
  level: {
    type: String,
    required: true,
    index: true
  },
  exampleSentence: {
    exampleChineseSentence: { type: String, required: true, index: true },
    exampleChinesePinyin: { type: String, required: true, index: true },
    exampleEnglishTranslation: { type: String, required: true, index: true }
  }
});

const Flashcard = mongoose.model("Flashcard", userSchema);

module.exports = Flashcard;
