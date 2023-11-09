const express = require("express");
const app = express();
const path = require("path");
const hbs = require("express-handlebars");
const morgan = require("morgan");
const port = 3000;
const route = require("./routes");
const db = require("./config/db");

//Connect to db
db.connect();
//Body-parser
app.use(express.json());
app.use(
    express.urlencoded({
        extended: true,
    })
);
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
app.set("views", path.join(__dirname, "resources", "views"));
//Route init
route(app);

app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`);
});
