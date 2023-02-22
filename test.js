const { req ,res } = require('express');
var express=require('express');
var app=express();

app.set('view engine','ejs');
app.use(express.urlencoded());

app.get("/",(req,res)=>{
    res.render("home");
});

app.get("/about",(req,res)=>{
    res.render("about");

});

app.listen(8180,()=>{
    console.log("server running http://localhost:8180")
})