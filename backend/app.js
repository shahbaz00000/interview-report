require("dotenv").config();

// external modules
const express = require("express");
const app = express();
const cors = require("cors");

// internal modules
const userRoute = require("./routes/userRoute.js");
const connectMongoDB = require("./config/mongoDB.js");
const interviewReportRoute = require("./routes/interviewReportRouter.js");

connectMongoDB();

// middleware 
app.use(cors());
app.use(express.json());

// routes
app.use("/api/auth", userRoute);
app.use("/api", interviewReportRoute);

app.use((error, req, res, next) => {
  if (!error) {
    return next();
  }

  console.error("Backend error:", error);

  return res.status(400).json({
    error: error.message || "Something went wrong",
  });
});


// server started 
const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});


