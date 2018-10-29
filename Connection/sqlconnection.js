const mysql = require('mysql'); 
global.conn  =  mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password:'Jpsm()1196' 
});
let sql_conn= async function(){ 
 try {
   await conn.connect() ; 
   await conn.query(`create database if not exists mydb`);
   await conn.query(`use mydb`);
   
   //Auto register 2 super admin
   
 } catch (error) {
     console.log("connect database");
 }
    
}
module.exports = sql_conn;