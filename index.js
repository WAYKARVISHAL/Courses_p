var express = require('express');
var adminRoute = require("./routes/admin");
var userRouter= require("./routes/user");
var upload = require("express-fileupload");
var session = require("express-session");
var bodyparser = require("body-parser");

var app = express();
app.use(express.static("public/"));
app.use(bodyparser.urlencoded({extended:true}));
app.use(upload());
app.use(session({
    secret:"vishal",
    resave:true,
    saveUninitialized:true
}));
app.use("/",userRouter);
app.use("/admin",adminRoute);


app.listen(2000);