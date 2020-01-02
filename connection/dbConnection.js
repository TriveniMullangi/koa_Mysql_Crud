var mysql = require('mysql');
var config = require('../config/config.json')

const config_Data = {
  host: config.host,
  port: 3306,
  user: config.user,
  password: config.password,
  database: config.database
};

//   var connection = mysql.createConnection(config_Data);
//   connection.connect(function(error){
//     if(error){
//       console.log(error);
//     }else{
//       console.log('Connected!:)');
//     }
//   });


// module.exports = {
//   connection:connection
// }

const pool = mysql.createPool(config_Data)

let query = (sql, values) => {
  return new Promise((resolve, reject) => {
      pool.getConnection(function (err, connection) {
          if (err) {
              reject(err)
          } else {
              connection.query(sql, values, (err, rows) => {

                  if (err) {
                      reject(err)
                  } else {
                      resolve(rows)
                  }
                  connection.release()
              })
          }
      })
  })
}

module.exports = query