const mysql = require("mysql");
var pool = mysql.createPool({
    host:"localhost",
    user:"root",
    password:"",
    database:"jialigou",
    mutipleStatements:true
})

function query(sql){
    return new Promise(function(resolve,reject){
pool.query(sql,(error,results,fields)=>{
    if (error) reject(error);
    resolve(results);
})
    })
}



module.exports = query;