const express = require("express");
const config = require("./config");
const app = express();

// Set up mongoose connection
const mongoose = require("mongoose");
mongoose.set('strictQuery', false);
const mongoDB = process.env.MONGODB_URI;

main().catch(err => console.log(err));
async function main() {
  await mongoose.connect(mongoDB);
}

app.set("view engine", "ejs");

const usage = [
  { path: express.static(__dirname + "/public"),
    description: "Define static files for style"},

  { path: express.urlencoded({ extended: true }), 
    description: "For calculator with method POST"},
    
  { path: express.json(), 
    description: "Parsing data to JSON format"},

  // Middleware
  // {path: require('./middleware/api-password'),
  // description: "Autentication wall: ?u=ruffle"},
  // Routes
  { path: require("./routes/Tools.route"), }, 
  { path: require("./routes/API.route") }, 
  { path: require("./routes/Basic.route") }, 
  { path: require("./routes/Users.route") }, 
  { path: require("./routes/Download.route") }, 
  { path: require("./routes/Error.route") },
];

usage.forEach((item) => {
  app.use(item.path);
});

app.listen(config.port, () => {
  console.log(
    `\nStarted on http://localhost:${config.port}\nUse Ctrl + C to end proccess`
  );
});

// Merged to TypeScript project
