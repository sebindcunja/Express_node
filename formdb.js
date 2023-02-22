var exp=require("express")
var app=exp()
var sql = require("mysql");
var con = sql.createConnection({
    host:"localhost",
    user:"root",
    password:"",
    database:"form",
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
    res.render('regform')

})
app.post("/daction",(req,res)=>{
    var nam=req.body.nam1;
    var em=req.body.email;
    var pnoo=req.body.pno;
    var gen=req.body.g;
    var pla=req.body.place;

    console.log(nam);
    console.log(em);
    console.log(pnoo);
    console.log(gen);
    console.log(pla);


    var sql="insert into data values(?,?,?,?,?)";
    con.query(sql,[nam,em,pnoo,gen,pla],(err,result)=>{
        if(err) throw err;
        console.log("Registered")
        res.send("Data Registered Successfuly");

    })
})

app.listen(8000,()=>{
    console.log("server running http://localhost:8000/")

})