var express = require("express");
var router = express.Router();
const Flashcard = require("../models/Flashcard");
const jwt = require("jsonwebtoken");
const flashcards = require("../preloadedData");

const protectedRoute = (req, res, next) => {
  try {
    if (!req.user) {
      throw new Error("Go away!");
    }
    next();
  } catch (err) {
    res.status(401).end("You are not authorised ");
  }
};

router.get("/", async function(req, res, next) {
  try {
    if (!req.user) {
      res.send(
        flashcards.map((v, index) => {
          return { ...v, id: index };
        })
      );
    } else {
      const userCreatedFlashcards = await Flashcard.find({
        user: req.user.id
      });
      res.send(userCreatedFlashcards);
    }
  } catch (err) {
    next(err);
  }
});

router.post("/new", protectedRoute, async (req, res, next) => {
  try {
    const flashcard = new Flashcard(req.body);
    await Flashcard.init();
    // assign user to the flashcard
    const userID = req.user.id;
    flashcard.user = userID;
    const newFlashcard = await flashcard.save();
    res.send(newFlashcard);
  } catch (err) {
    res.status(500).end("Not authorised to post new flashcards");
  }
});

router.delete("/:id", protectedRoute, async (req, res, next) => {
  try {
    const id = req.params.id;
    await Flashcard.findByIdAndDelete(id);
    res.send();
  } catch (err) {
    res.status(500).end("Not authorised to delete!!!");
    // next(err);
  }
});

module.exports = router;
