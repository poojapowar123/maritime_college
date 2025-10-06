require("dotenv").config(); // load .env

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const helmet = require("helmet");

const app = express();
app.use(cors());
app.use(helmet());
app.use(express.json());

// Connect to MongoDB Atlas
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log("MongoDB connected ✅"))
.catch(err => console.log("MongoDB connection error:", err));

// Test route
app.get("/", (req, res) => res.send("Backend running lohfdvhfkdjvhkjfdhkfhkvhdfjkvhjdfkhvjkfhkjbhfkhbkfhgfgh🚀"));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

