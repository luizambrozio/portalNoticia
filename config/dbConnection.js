var mysql = require('mysql');

var connMySQL = function(){
  console.log("conexa BD estabelecida");
  return mysql.createConnection({
    host : 'localhost',
    user : 'root',
    password : '',
    database : 'portalNoticias'
  });
}

module.exports = function(){
  return connMySQL;
}
