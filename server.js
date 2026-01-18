const express = require("express");
const mongoose = require("mongoose");
const reviewRoutes = require("./routes/reviewRoutes");
const cors = require("cors");
require("dotenv").config();

const authRoutes = require("./routes/auth");
// // const settingsRoutes = require("./routes/settings");
const app = express();
app.use(cors());
// // const app = express();
app.use(express.json());
// // app.use(cors());
// // app.use(express.json());

app.use("/api/auth", authRoutes);
app.use("/api/reviews", reviewRoutes);

// app.use("/api/settings", settingsRoutes);

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB connected"))
  .catch(err => console.log(err));

app.listen(process.env.PORT, () => console.log("Server running on port", process.env.PORT));
