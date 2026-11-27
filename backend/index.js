require("dotenv").config()
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const authRoutes = require("./Routes/authRoutes")


const app = express();

app.use(cors());

app.use(express.json());
app.use("/api", authRoutes)

const PORT = process.env.PORT || 7000;
const MONGO_URL = process.env.MONGO_URI

app.get("/", (req, res) => {
   res.send("Backend is running")
});

mongoose.connect(MONGO_URL).then(() => {

  console.log("MongoDB connected successfully")

  app.listen (PORT, () => {
  console.log(`Server is running on port ${PORT}`)
  })
}).catch((error) => {
  console.error("MongoDB connection failed:",error.message);
});

