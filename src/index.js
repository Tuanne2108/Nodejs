const express = require("express");
const app = express();
const path = require("path");
const hbs = require("express-handlebars");
const morgan = require("morgan");
const port = 3000;
const route = require("./routes");
const db = require("./config/db");
const methodOverride = require("method-override");
const sortMiddleware = require("./middlewares/sortMiddleware");

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
//Method Override
app.use(methodOverride("_method"));
//Custom middlewares
app.use(sortMiddleware);
//Template engine
app.engine(
    "hbs",
    hbs.engine({
        extname: "hbs",
        helpers: {
            sum: (a, b) => a + b,
            canSorted: (field, sort)=>{
                const sortType = field === sort.column ? sort.type : 'default';
                const icons ={
                    default: 'bi bi-funnel',
                    desc: 'bi bi-sort-down',
                    asc: 'bi bi-sort-down-alt',
                }
                const type = sortType === 'desc'? 'asc' : 'desc';
                const icon = icons[sortType];
                return `<a href="?_sort&column=${field}&type=${type}"><i class="${icon}"></i></a>`
            }
        },
    })
);
app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "resources", "views"));
//Route init
route(app);

app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`);
});
