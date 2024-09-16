const express = require("express");
const app = express();
const dictionaryRoutes = require("./routes/dictionaryRoutes");
const path = require("path");

app.use(express.json());

// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, "public")));

// Use the dictionary routes
app.use(dictionaryRoutes);

// Server setup
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
