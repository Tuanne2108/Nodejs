const express = require("express");
const app = express();
const path = require("path");
const hbs = require("express-handlebars");
const morgan = require("morgan");
const port = 3000;

//Static files
app.use(express.static(path.join(__dirname, "public")));
//Http logger
app.use(morgan("combined"));
//Template engine
app.engine(
  "hbs",
  hbs.engine({
    extname: "hbs",
  })
);
app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "resources\\views"));
//Main
app.get("/", (req, res) => {
  res.render("home");
});
app.get("/news", (req, res) => {
  res.render("news");
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
