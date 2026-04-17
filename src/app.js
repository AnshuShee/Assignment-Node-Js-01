const express = require("express");
const dotenv = require("dotenv");
const noteRoutes = require("./routes/note.routes");

dotenv.config();

const app = express();

// Middlewares
app.use(express.json());

// Routes
app.use("/api/notes", noteRoutes);

// Root route for testing
app.get("/", (req, res) => {
  res.send("Notes API is running...");
});

module.exports = app;
