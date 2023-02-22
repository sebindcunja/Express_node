const { urlencoded } = require("body-parser");
const express = require("express");
const mysql = require("mysql");

var app = express();

app.set("view engine", "ejs");
app.use(express.urlencoded());
app.use(express.static("styles"));

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "user",
  port: 3306,
});

con.connect(function (err) {
  if (err) throw err;
  console.log("connected");
});

app.get("/", (req, res) => {
  res.render("reg");
});

app.post("/register", (req, res) => {
  eml = req.body.eml;
  psw = req.body.psw;

  sql = "insert into info values(?,?,?) ";

  con.query(sql, [0, eml, psw], (err, result) => {
    if (err) throw err;

    res.send("successfully");
  });
});

app.get("/login", (req, res) => {
  res.render("login");
});

app.post("/loginAction", (req, res) => {
  eml = req.body.eml;
  psw = req.body.psw;
  sql = "SELECT * FROM info WHERE name=? AND Pass=?";

  con.query(sql, [eml, psw], (err, result) => {
    if (err) throw err;
    if (result.length > 0) {
      res.render("home");
    } else {
      res.send("login not successfull");
    }
  });
});

app.listen(9000, () => {
  console.log("http://localhost:9000/");
});
