const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const cors = require("cors");

const indexRouter = require("./index");
const usersRouter = require("./routes/users");
const flashcards = require("./routes/flashcards");
const jwt = require("jsonwebtoken");

const app = express();

const corsOptions = {
  credentials: true,
  allowedHeaders: "content-type",
  origin: "http://localhost:3001"
};
app.use(cors(corsOptions));

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

const userVerify = (req, res, next) => {
  try {
    if (req.cookies.token) {
      req.user = jwt.verify(req.cookies.token, process.env.JWT_SECRET_KEY);
    }
    next();
  } catch (_err) {
    // just ignore error
    next();
  }
};
app.use(userVerify);

app.use("/", indexRouter);
app.use("/users", usersRouter);
app.use("/flashcards", flashcards);

// const port = process.env.PORT || 5000;
// console.log("PORT: ", port);

// app.listen(port, () => {
//   console.log(`App is now listening in Port ${port} in ${env} mode`);
// });

module.exports = app;
