var exp=require("express")
var app=exp()
var sql = require("mysql");
var con = sql.createConnection({
    host:"localhost",
    user:"root",
    password:"",
    database:"empdetail_db",
    port:3306

});
con.connect((err)=>{
    if (err) throw err;
    console.log("connected")

})

app.set('view engine','ejs')
app.use(exp.urlencoded())
app.use(exp.static('style'))

app.get('/',(req,res)=>{
    res.render('employ')

})
app.post("/empaction",(req,res)=>{
    var email=req.body.em1;
    var password=req.body.pass;
    console.log(email);
    console.log(password);


    var sql="insert into detail values(?,?,?)";
    con.query(sql,[0,email,password],(err,result)=>{
        if(err) throw err;
        console.log("Registered")
        res.send("Data Registered Successfuly");

    })
})

app.listen(8000,()=>{
    console.log("server running http://localhost:8000/")

})