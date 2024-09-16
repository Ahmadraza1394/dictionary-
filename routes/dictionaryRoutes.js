const express = require("express");
const router = express.Router();
const dictionaryController = require("../controllers/dictionaryController");

// Route to get all words
router.get("/dictionary", dictionaryController.getAllWords);

// Route to add a new word
router.post("/dictionary", dictionaryController.addWord);

// Route to delete a word
router.delete("/dictionary/:word", dictionaryController.deleteWord);

module.exports = router;
