const express = require("express");
const config = require("./config");
const app = express();

app.set("view engine", "ejs");

const usage = [
  { path: express.static(__dirname + "/public") },
  { path: express.urlencoded({ extended: true }), 
    description: "For calculator with method POST"},
  { path: express.json() },

  // Middleware
  // {path: require('./middleware/api-password')},

  // Routes
  { path: require("./routes/Tools.route") }, 
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