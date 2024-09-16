// Business logic for dictionary ( like Add , Delete words)
const { getDictionary, saveDictionary } = require("../models/dictionaryModel");

// Get all words
exports.getAllWords = (req, res) => {
  const dictionary = getDictionary();
  res.json(dictionary);
};

// Add a new word
exports.addWord = (req, res) => {
  const { word, meaning } = req.body;
  let dictionary = getDictionary();

  dictionary.push({ word, meaning });
  saveDictionary(dictionary);

  res.status(201).json({ message: "Word added successfully" });
};

// Delete a word
exports.deleteWord = (req, res) => {
  const { word } = req.params;
  let dictionary = getDictionary();

  dictionary = dictionary.filter((entry) => entry.word !== word);
  saveDictionary(dictionary);

  res.status(200).json({ message: "Word deleted successfully" });
};
