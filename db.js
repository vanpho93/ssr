var pg = require('pg');
var config = {
  user: 'postgres',
  password: 'khoapham',
  database: 'USER',
  host: 'localhost',
  port: 5432,
  max: 10,
  idleTimeoutMillies: 30000
}

var pool = new pg.Pool(config);

function queryDB(sql, cb){
  pool.connect(function(err, client, done){
    if(err){
      console.log('LOI KET NOI ' + err);
    }else{
      client.query(sql, function(err, result){

      });
    }
  });
}


function query(sql){
  return new Promise(
    function(resovle, reject){
      pool.connect(function(err, client, done){
        if(err){
          reject('Loi ket noi');
        }else{
          client.query(sql, function(err, result){
            if(err){
              reject('Loi query');
            }else{
              resovle(result);
            }
          });
        }
      });
    }
  );
}
//SELECT * FROM "User" WHERE username = 'xyz' AND password = 'abc'

pool.on('error', function(err, client){
  console.log('LOI:: ' + err);
});

// queryDB(`SELECT * FROM "SanPham"`, function(err, result){
//   console.log(result.rows);
// })

module.exports = query;
