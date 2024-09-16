const fs = require("fs");
const path = require("path");

const dataFilePath = path.join(__dirname, "../data/data.json");

// Function to read the dictionary
function getDictionary() {
  const data = fs.readFileSync(dataFilePath, "utf8");
  return JSON.parse(data);
}

// Function to save the updated dictionary
function saveDictionary(dictionary) {
  fs.writeFileSync(dataFilePath, JSON.stringify(dictionary, null, 2));
}

module.exports = { getDictionary, saveDictionary };
