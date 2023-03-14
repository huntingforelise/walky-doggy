var config = require("./config");
var express = require("express");
var session = require("express-session");
var app = express();
var cors = require("cors");
var router = require("./router");
var mongoConnection = require("./models/index");
var corsConfig = {
    origin: config.corsOrigin,
    credentials: true,
};
app.use(cors(corsConfig));
app.use(express.json());
app.use(session({
    name: "sid",
    saveUninitialized: false,
    resave: false,
    secret: "not secure!",
    cookie: {
        maxAge: 1000 * 60 * 60,
        sameSite: true,
        httpOnly: false,
        secure: false,
    },
}));
app.use(router);
app.get("*", function (req, res) {
    res.status(404).send("Sorry, not found 😞");
});
app.listen(config.PORT, function (err) {
    if (err) {
        console.log("\uD83D\uDE1E Sorry, something went wrong! ".concat(err));
    }
    else {
        console.log("\uD83D\uDE80 Server is listening on port ".concat(config.PORT, "!"));
    }
});
//# sourceMappingURL=index.js.map