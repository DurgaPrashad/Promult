const express = require("express");
const dotenv = require("dotenv");
const apiRoutes = require("./routes/apiRoutes");
const mongoose = require("mongoose");

// Load environment variables from .env file
dotenv.config();

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
}).then(() => {
  console.log("Connected to MongoDB");
}).catch((error) => {
  console.error("Error connecting to MongoDB:", error);
});

// Create an Express app
const app = express();

// Middleware to parse JSON request bodies
app.use(express.json());

// Set up routes
app.use("/api", apiRoutes);

// Define the server port
const PORT = process.env.PORT || 5000;

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});