const express = require("express");
require("dotenv").config();
const connectDB = require("./config/database");
const app = express();
const PORT = process.env.PORT || 7777;
const cookieParser = require("cookie-parser");
const cors = require("cors");

app.use(
  cors({
    origin: "https://devtinder-frontend.vercel.app",
    credentials: true,
  })
);
app.use(express.json());
app.use(cookieParser());

const authRouter = require("./routes/auth");
const profileRouter = require("./routes/profile");
const requestRouter = require("./routes/request");
const userRouter = require("./routes/user");

app.use("/", authRouter);
app.use("/", profileRouter);
app.use("/", requestRouter);
app.use("/", userRouter);

connectDB()
  .then(() => {
    console.log("Database connection established...");
    app.listen(PORT, () => {
      console.log(`Server is successfully listening on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.error("Database cannot be connected!!");
  });
