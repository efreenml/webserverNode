const express = require("express");
const hbs = require("hbs");

const app = express();
require("dotenv").config();
const port = process.env.PORT;
app.set("view engine", "hbs");
hbs.registerPartials(__dirname + "/views/partials");

app.use(express.static("./public"));

app.get("/", (req, res) => {
  res.render("home", {
    name: "personal name test",
    title: "node js course"
  });
});

app.get("/generic", (req, res) => {
  res.render("generic", {
    name: "personal name test",
    title: "node js course"
  });
});

app.get("/elements", (req, res) => {
  res.render("elements", {
    name: "personal name test",
    title: "node js course"
  });});




app.get("*", (req, res) => {
  //res.send("404 | Page not found ~");
  res.sendFile(__dirname + "/public/404.html");
});
console.log(`****listening ${port}`)
app.listen(port);