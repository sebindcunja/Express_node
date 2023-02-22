const { request } = require('express');
var express=require('express');
var app=express();
app.get("/",(request,response)=>{
    response.send("hello")
})
app.listen(9000,()=>{
    console.log("server running http://localhost:9000")
})
