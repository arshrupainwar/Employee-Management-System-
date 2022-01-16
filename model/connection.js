const mysql = require("mysql");

//Database Connection
const db = mysql.createConnection({
    host:"localhost",
    user:"root",
    passsword:"",
    database:"employee"
});

db.connect(err =>{
    if(err) throw err;
    console.log("MySql Connected");

});

module.exports = db;
