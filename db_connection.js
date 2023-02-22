var sql = require("mysql");
var con = sql.createConnection({

    host:"localhost",
    user:"root",
    password:""
});
con.connect(function(err){
    if(err) throw err;
    console.log("connected");
});