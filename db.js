const mongoose = require("mongoose");

let dbUrl;
// if (process.env.NODE_ENV === "development") {
const dbName = "flashcardForEducation";
dbUrl = `mongodb://localhost/${dbName}`;
// }

// if (process.env.NODE_ENV === "production") {
dbUrl = process.env.MONGO_URI;
// }

mongoose.set("useNewUrlParser", true);
mongoose.set("useFindAndModify", false);
mongoose.set("useCreateIndex", true);
mongoose.set("useUnifiedTopology", true);

mongoose.connect(dbUrl);
const db = mongoose.connection;

//For debugging purposes
mongoose.set("debug", true);

db.on("error", console.error.bind(console, "connection error:"));
db.once("open", function() {
  console.log("We are now connected to MongoDB server!");
});
