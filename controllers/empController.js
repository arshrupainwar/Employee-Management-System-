const express = require("express");
const db = require("../model/connection");
const router = express.Router();

router.get("/employee-list",(req,res) => {
    let sql = "SELECT * FROM empdetails";
    db.query(sql, (err,result)=>{
        if(err) throw err;
        //res.json({result:result});
        res.render("list",{list:result})  
    });
});

router.get("/employee-list/:id",(req,res) => {
    const id = req.params.id;
    let sql = `SELECT * FROM empdetails WHERE id = ${id}`;
    db.query(sql ,(err,result) =>{
        if(err) throw err;
        res.json({result:result});
    });
});

router.post("/employee-create",(req,res) => {
    //console.log(req.body);
    const {name,email,pno,password} = req.body;
    const user = {name,email,pno,password};
    let sql = "INSERT INTO `empdetails` SET ?";
    db.query(sql,user,(err,result) =>{
        if(err) throw err;
        res.json({result:result});
    })
});

router.delete("/employee-delete/:id",(req,res) => {
    const id = req.params.id;
    let sql = `DELETE FROM empdetails WHERE id = ${id}`;
    db.query(sql,(err,result) => {
        if(err) throw err;
        res.json({result:result});
    })
});

router.get("/employee-create",(req,res) => {
    res.render("AddEmp",{viewTittle:"Add Employee Data"});
});

router.get("/employee-update",(req,res) => {
    let sql = "SELECT * FROM empdetails";
    db.query(sql, (err,result)=>{
        if(err) throw err;
        //res.json({result:result});
        res.render("update",{list:result})  
    });
});

router.get("/employee-updatedata/:id",(req,res) => {
    const id = req.params.id;
    let sql = `SELECT * FROM empdetails WHERE id = ${id}`;
    //console.log(sql);
    db.query(sql,(err,result) => {
        if(err) throw err
        //console.log(result);
        res.render("finalUpdate",{list:result[0],viewTittle:"Update Employee"});
    });
});

router.post("/finalupdate",(req,res) => {
    //console.log(req.body);
    const{name,email,pno,password} = {...req.body};
    let sql = `UPDATE empdetails SET name='${name}',pno='${pno}',password='${password}' WHERE email='${email}'`;
    db.query(sql,(err,result) => {
        if(err) throw err
        res.redirect("/employee-update");
    });
})

router.get("/employee-delete/:id",(req,res) => {
    const id = req.params.id;
    let sql = `DELETE FROM empdetails WHERE id = ${id}`;
    db.query(sql,(err,result) => {
        if(err) throw err;
        res.redirect("/employee-update");
    })
});
    


module.exports = router;
